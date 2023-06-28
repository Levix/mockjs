import * as Random from './random';
import { hasOwnProperty, type, match } from './helper';

// 占位符处理
function placeholder(all: string, holder: string, param: string) {
  if (!hasOwnProperty.call(Random, holder)) {
    return all;
  }

  let params = [];

  if (param) {
    try {
      params = new Function(`return [${param}]`)();
    } catch (err) {}
  }
  // 调用占位符方法
  const fn = Random[holder];

  return fn.apply(null, params);
}

// 数据类型处理器
export const processors = {
  // 对象处理
  object(tpl: Object, key: string) {
    // 'name|count': object
    // 'name|min-max': object
    const ret = {};
    const keys = Object.keys(tpl);
    const length = keys.length;
    let count = length;
    const m = match(key, /\|(\d+)(?:-(\d+))?/);

    if (m) {
      if (m[2]) {
        count = Random.int(m[1], m[2]);
      } else {
        count = +m[1];
      }
    }

    if (count >= length) {
      // 函数放末尾处理 'name': function
      keys.sort(k => (type(k) === 'function' ? 1 : 0));
      // 处理全部
      keys.forEach(it => {
        ret[it.replace(/\|.+/, '')] = generator(tpl[it], it);
      });
    } else {
      // 随机抽取
      keys
        .sort(() => (Math.random() < 0.5 ? -1 : 1))
        .slice(0, count)
        .forEach(it => {
          ret[it.replace(/\|.+/, '')] = generator(tpl[it], it);
        });
    }

    return ret;
  },

  // 数组处理
  array(tpl: any[], key: string) {
    // 'name|1': array
    // 'name|min-max': array
    // 'name|count': array
    let result: any[] = [];
    const length = tpl.length;

    // 处理空数组
    if (length === 0) return result;

    let count = 0;
    const m = match(key, /\|(\+)?(\d+)(?:-(\d+))?/);

    if (m) {
      if (m[2] === '1' && m[3] === undefined) {
        // 'name|1': array
        const idx = Random.int(0, length - 1);
        result = generator(tpl[idx], idx);
        return result;
      } else if (m[3]) {
        count = Random.int(m[2], m[3]);
      } else {
        count = +m[2];
      }
    }

    if (count === 0) {
      tpl.forEach((it: any, idx: any) => result.push(generator(it, idx)));
    } else {
      // 重复 count 次
      for (let i = 0; i < count; i += 1) {
        tpl.forEach((it: any) => result.push(generator(it, i)));
      }
    }

    return result;
  },

  // 数字处理
  number(tpl: number, key: string) {
    // 'name|+number': number
    // 'name|min-max': number
    // 'name|min-max.dmin-dmax': number
    // 'name|number.dmin-dmax': number
    const m = match(key, /\|([+-]?\d+)(?:-([-]?\d+))?(?:\.(\d+)(?:-(\d+))?)?/);

    if (!m) {
      return tpl; // 没有匹配到
    }

    // 'name|+number': number
    if (m[1][0] === '+') {
      return tpl;
    }

    // 'name|min-max.dmin-dmax': number
    if (m[3] || m[4]) {
      return Random.float(parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10), parseInt(m[4], 10));
    }

    // 'name|min-max': number
    if (m[2]) {
      return Random.int(m[1], m[2]);
    }

    return tpl;
  },

  // 字符串处理
  string(tpl: string, key: string) {
    // 'name|min-max': string  重复 string 字符串 min-max 次
    // 'name|count': string  重复 string 字符串 count次
    let count = 0; // 重复次数
    const m = match(key, /\|(\d+)(?:-(\d+))?/); // 匹配key

    if (m) {
      if (m[2]) {
        // 'name|min-max': string
        // 最小次数-最大次数随机
        count = Random.int(m[1], m[2]);
      } else {
        // 'name|count': string
        // 固定次数
        count = +m[1];
      }
    }

    let str = tpl;

    // 'name|min-max': '' or 'name|count': ''
    if (tpl === '') {
      return Random.string('alpha', count || undefined);
    }

    if (count) {
      str = Array(count + 1).join(tpl); // 重复N次
    }

    const mHolder = str.match(/^@(\w+)(?:\(([^)]*)\))?$/);

    if (mHolder) {
      // 'name': '@now(true)'
      // 单占位符处理 (保持数据类型)
      return placeholder(str, mHolder[1], mHolder[2]);
    }

    // 'name': '@date @now @name'
    // 多占位符处理 (输出字符串)
    str = str.replace(/@(\w+)(?:\(([^)]*)\))?/g, (all: any, holder: string, param: string) =>
      placeholder(all, holder, param),
    );

    return str;
  },
};

export { Random };

// 模板数据生成器
export default function generator(data: any, key: string | number) {
  const processor = processors[type(data)];
  return processor ? processor(data, key) : data;
}

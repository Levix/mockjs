import * as Random from './random/index'

const toString = Object.prototype.toString

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 获取数据类型
 *
 * @param {any} any
 * @returns {string}
 */
function type (any: any) {
  return toString.call(any).slice(8, -1).toLowerCase()
}

/**
 * 匹配键名处理
 *
 * @param {any} key
 * @param {any} re
 * @returns
 */
function match (key: any, re: any) {
  if (type(key) !== 'string') {
    return null
  }
  return key.match(re)
}

/**
 * 占位符处理
 *
 * @param {string} holder
 * @param {string} param
 * @returns
 */
function placeholder (all: any, holder: string, param: string, opts: any) {
  // 优先使用兄弟节点值
  if (opts.parent && hasOwnProperty.call(opts.parent, holder)) {
    return opts.parent[holder]
  }

  if (!hasOwnProperty.call(Random, holder)) {
    return all
  }

  let params = []

  if (param) {
    try {
      params = new Function(`return [${param}]`)()
    } catch (err) {}
  }

  // 调用占位符方法
  const fn = Random[holder]

  return fn.apply(null, params)
}

// 数据类型处理器
export const processors = {
  // 对象处理
  object (tpl: any, key: string, opts: any) {
    // 'name|count': object
    // 'name|min-max': object
    const ret = {}
    const keys = Object.keys(tpl)
    const length = keys.length
    let count = length
    const m = match(key, /\|(\d+)(?:-(\d+))?/)

    if (m) {
      if (m[2]) {
        count = Random.int(m[1], m[2])
      } else {
        count = +m[1]
      }
    }

    opts.parentTpl = tpl // 带上当前对象
    opts.parent = ret // 当前解析后的对象

    if (count >= length) {
      // 函数放末尾处理 'name': function
      keys.sort(k => (type(k) === 'function' ? 1 : 0))
      // 处理全部
      keys.forEach(it => {
        ret[it.replace(/\|.+/, '')] = generator(tpl[it], it, opts)
      })
    } else {
      // 随机抽取
      keys
        .sort(() => (Math.random() < 0.5 ? -1 : 1))
        .slice(0, count)
        .forEach(it => {
          ret[it.replace(/\|.+/, '')] = generator(tpl[it], it, opts)
        })
    }

    return ret
  },

  // 数组处理
  array (tpl: any, key: string, opts: any) {
    // 'name|1': array
    // 'name|+1': array
    // 'name|min-max': array
    // 'name|count': array
    let result: any[] = []
    const length = tpl.length

    // 处理空数组
    if (length === 0) {
      return result
    }

    let count = 0
    const m = match(key, /\|(\+)?(\d+)(?:-(\d+))?/)

    if (m) {
      if (m[2] === '1' && m[3] === undefined) {
        if (m[1] === '+') {
          // 'name|+1': array
          let idx = tpl._idx || 0
          if (idx >= length) {
            idx = 0
          }
          result = generator(tpl[idx], idx, opts)
          tpl._idx = idx + 1
        } else {
          // 'name|1': array
          const idx = Random.int(0, length - 1)
          result = generator(tpl[idx], idx, opts)
        }
        return result
      } else if (m[3]) {
        count = Random.int(m[2], m[3])
      } else {
        count = +m[2]
      }
    }

    if (count === 0) {
      tpl.forEach((it: any, idx: any) => result.push(generator(it, idx, opts)))
    } else {
      // 重复 count 次
      for (let i = 0; i < count; i += 1) {
        tpl.forEach((it: any) => result.push(generator(it, i, opts)))
      }
    }

    return result
  },

  // 数字处理
  number (tpl: any, key: string, opts: any) {
    // 'name|+number': number
    // 'name|min-max': number
    // 'name|min-max.dmin-dmax': number
    // 'name|number.dmin-dmax': number
    const m = match(key, /\|([+-]?\d+)(?:-([-]?\d+))?(?:\.(\d+)(?:-(\d+))?)?/)

    if (!m) {
      return tpl // 没有匹配到
    }

    // 'name|+number': number
    if (m[1][0] === '+') {
      opts.parentTpl[key] += parseInt(m[1], 10) // 父节点数据累加
      return tpl
    }

    // 'name|min-max.dmin-dmax': number
    if (m[3] || m[4]) {
      return Random.float(m[1], m[2], m[3], m[4])
    }

    // 'name|min-max': number
    if (m[2]) {
      return Random.int(m[1], m[2])
    }

    return tpl
  },

  // 字符串处理
  string (tpl: any, key: string, opts: any) {
    // 'name|min-max': string  重复 string 字符串 min-max 次
    // 'name|count': string  重复 string 字符串 count次
    let count = 0 // 重复次数
    const m = match(key, /\|(\d+)(?:-(\d+))?/) // 匹配key

    if (m) {
      if (m[2]) {
        // 'name|min-max': string
        count = Random.int(m[1], m[2])
      } else {
        // 'name|count': string
        count = +m[1]
      }
    }

    let str = tpl

    // 'name|min-max': '' or 'name|count': ''
    if (tpl === '') {
      return Random.string('alpha', count || undefined)
    }

    if (count) {
      str = Array(count + 1).join(tpl) // 重复N次
    }

    const mHolder = str.match(/^@(\w+)(?:\(([^)]*)\))?$/)

    if (mHolder) {
      // 'name': '@now(true)'
      // 单占位符处理 (保持数据类型)
      return placeholder(str, mHolder[1], mHolder[2], opts)
    }

    // 'name': '@date @now @name'
    // 多占位符处理 (输出字符串)
    str = str.replace(
      /@(\w+)(?:\(([^)]*)\))?/g,
      (all: any, holder: string, param: string) =>
        placeholder(all, holder, param, opts)
    )

    return str
  },

  // 布尔值处理
  boolean (tpl: any, key: string) {
    // 'name|min-max': boolean  1/min-max 的概率返回 boolean 的值
    // 'name|count': boolean  1/count 概率返回 boolean 的值
    const m = match(key, /\|(\d+)(?:-(\d+))?/) // 匹配key
    return m ? Random.bool() : tpl
  },

  // 函数处理
  function: (fn: Function, key: string, opts: any) => {
    // 'name': function
    opts.callbacks.push({ fn, key, parent: opts.parent })
    return '[Waiting for callback processing...]'
  }
}

export { Random }

/**
 * 数据生成器入口
 *
 * @export
 * @param {any} data mock 模板数据
 * @param {string} key 当前数据的 key
 * @param {object} opts 公用数据
 * @returns {any}
 */
export default function generator (data: any, key: string | number, opts: any) {
  const processor = processors[type(data)]
  return processor ? processor(data, key, opts) : data
}

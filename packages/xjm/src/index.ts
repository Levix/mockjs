type MockType = 'string' | 'number' | 'boolean' | 'Date' | 'Object' | 'Array';

interface Keys {
  key: string;
  value: (...params: unknown[]) => any;
}

class Mock {
  private characters: string

  constructor() {
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  }

  // 生成{unit}位字符串
  mockString(unit: number) {
    let str = '';
    for (let i = 0; i < unit; i += 1) {
      const chat = this.characters[Math.floor(Math.random() * this.characters.length)];
      str += chat;
    }
    return str;
  }

  // 生成{min}-{max}范围内的数字
  mockNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

  // 生成boolean类型的值
  mockBoolean() {
    return Math.random() > 0.5;
  }

  // 生成Date类型的值
  mockDate() {
    const start = new Date(1970, 0, 1).getTime();
    const end = new Date().getTime();
    const time = start + Math.floor((end - start) * Math.random());
    return new Date(time);
  }

  // 生成Object类型的值
  mockObject(keys: Keys[]) {
    const obj: { [key: string]: any } = {};
    keys.forEach(key => {
      obj[key.key] = key.value();
    });
    return obj;
  }

  // 生成{length}长度的数组，且数组每一项范围在{min}-{max}之间
  mockArray(length: number, min: number, max: number) {
    const arr = [];
    for (let i = 0; i < length; i += 1) {
      const num = this.mockNumber(min, max);
      arr.push(num);
    }
    return arr;
  }

  // 生成随机手机号
  mockPhoneNumber() {
    const startList = [
      '130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
      '150', '151', '152', '153', '155', '156', '157', '158', '159', '176',
      '177', '178', '180', '181', '182', '183', '184', '185', '186', '187',
      '188', '189',
    ];
    const prefix = startList[Math.floor(Math.random() * startList.length)];
    let suffix = '';
    for (var i = 0; i < 8; i++) {
      suffix += Math.floor(Math.random() * 10);
    }
    return `${prefix}${suffix}`;
  }
}

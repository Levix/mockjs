/**
 * 特定规则 mock数据
 */
import { number } from './number';
import { string } from './string';

/**
 * 生成手机号码
 * @returns
 */
const phone = () => {
  const startList = [
    '130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
    '150', '151', '152', '153', '155', '156', '157', '158', '159', '176',
    '177', '178', '180', '181', '182', '183', '184', '185', '186', '187',
    '188', '189',
  ];
  const prefix = startList[Math.floor(Math.random() * startList.length)];
  let suffix = '';
  for (let i = 0; i < 8; i++) {
    suffix += Math.floor(Math.random() * 10);
  }
  return `${prefix}${suffix}`;
};

// 根据前17位生成末位
const cnNewID = (id: string) => {
    const arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
    const arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
    let sum = 0;
    for (let j = 0; j < 17; j++) {
      // 对前17位数字与权值乘积求和
      sum += parseInt(id[j], 10) * arrExp[j];
    }
    return arrValid[sum % 11];
}

/**
 * 生成中国身份证号码
 * @returns
 */
const id = () => {
    // 前六位随机数
    const firstRandomStr = string.num(6);
    // 年份
    // 年份第一位仅支持1和2
    const firstYearUnit = number.range(1, 2);
    // 两位年份规则，仅支持19和20
    const secondYearUnit = firstYearUnit === 1 ? 9 : 0;
    // 三位年份规则，仅支持193-199、200、201、202
    const thirdYearUnit = firstYearUnit === 1 ? number.range(3, 7) : number.range(0, 2);
    // 四位年份规则,0-9
    const lastYearUnit = number.range(0, 9);
    const year = `${firstYearUnit}${secondYearUnit}${thirdYearUnit}${lastYearUnit}`;
    // 月份
    // 月份首位规则 0-1
    const firstMonthUnit = number.range(0, 1);
    // 月份末位
    const lastMonthUnit = firstMonthUnit === 0 ? number.range(1, 9) : number.range(0, 2);
    const month = `${firstMonthUnit}${lastMonthUnit}`;
    // 天数
    const days = new Date(Number(year), Number(month), 0).getDate();
    const day = String(number.range(1, days)).padStart(2, '0');
    // 随机三位数
    const lastRandomStr = string.num(3);
    // 末尾
    const last = cnNewID(`${firstRandomStr}${year}${month}${day}${lastRandomStr}`);
    return `${firstRandomStr}${year}${month}${day}${lastRandomStr}${last}`
}

export const rules = {
  phone,
  id,
};

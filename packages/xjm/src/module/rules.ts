/**
 * 特定规则 mock数据
 */
import { number } from './number';

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
function cnNewID(id: string) {
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
function id() {
    let idNo = '';
    for(let i = 0; i < 18; i++) {
        if(i < 6) {
            idNo += number.range(0, 10)
        }else if(i === 6) {
            idNo += number.range(1, 2) //年份第一位仅支持1和2
        }else if(i === 7) { 
            idNo += idNo[6] == '1' ? 9 : 0;//两位年份规则，仅支持19和20
        }else if(i === 8) {
            idNo += idNo[6] == '1' ? number.range(3, 7) : number.range(0, 2); //三位年份规则，仅支持193-199、200、201这些值
        }else if(i === 9) {
            idNo += number.range(0, 10) //四位年份规则,0-9
        }else if(i === 10) {
            idNo += number.range(0, 2);//首位月份规则
        }else if(i === 11) {
            idNo += idNo[10] == '0' ? number.range(1, 9) : number.range(0, 3);//末位月份规则
        }else if(i === 12) {
            const maxDays = new Date(Number(idNo.slice(6, 10)), Number(idNo.slice(10, 2)), 0).getDate(); // 获取当月最大天数
            const day = number.range(1, maxDays)
            if (day) {
              idNo += day < 10 ? ('0' + day) : day;
              i++
            }
        }else if(i > 13 && i < 17) {
            idNo += number.range(0, 10)
        }else if(i === 17) {
            idNo += cnNewID(idNo);
        }
    }
    return idNo;
}

export const rules = {
  phone,
  id,
};

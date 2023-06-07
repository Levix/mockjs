import { number } from './number';
import { date } from './date';

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
  for (var i = 0; i < 8; i++) {
    suffix += Math.floor(Math.random() * 10);
  }
  return `${prefix}${suffix}`;
};

/**
 * 生成身份证号码
 * @returns 
 */
const id = () => {
  const areaCode = number(110000, 659004);
  var birthDate = date();
  const year = birthDate.getFullYear().toString().slice(-2);
  const month = (birthDate.getMonth() + 1).toString().padStart(2, '0');
  const day = birthDate.getDate().toString().padStart(2, '0');
  const sequenceCode = number(0, 999).toString().padStart(3, '0');
  const id17 = areaCode + year + month + day + sequenceCode;
  const weightedFactors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checksums = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  let sum = 0;
  for (let i = 0; i < id17.length; i++) {
    sum += parseInt(id17.charAt(i)) * weightedFactors[i];
  }
  const checksumIndex = sum % 11;
  const checksum = checksums[checksumIndex];
  const idNumber = areaCode + year + month + day + sequenceCode + checksum;
  return idNumber;
};

export {
  phone,
  id,
};

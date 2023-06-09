/**
 * 生成一个随机的11位手机号
 * @returns number
 */
export function getPhone() {
  const prefixList = [
    '130', '131', '132', '133', '134', 
    '135', '136', '137', '138', '139', 
    '147', '150', '151', '152', '153', 
    '155', '156', '157', '158', '159', 
    '166', '170', '171', '172', '173', 
    '174', '175', '176', '177', '178', 
    '180', '181', '182', '183', '184', 
    '185', '186', '187', '188', '189', '191', '198', '199'
  ];

  const prefix = prefixList[Math.floor(Math.random() * prefixList.length)];
  const suffix = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0').substring(0, 8);
  return Number(prefix + suffix);
}
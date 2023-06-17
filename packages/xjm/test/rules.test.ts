import { it, expect } from 'vitest';
import { rules } from '../src/module/rules';

it('生成随机手机号码', () => {
  const result = rules.phone();
  const phoneReg = /^1(3\d|4[5-9]|5[0-35-9]|6[56]|7[0-8]|8\d|9[189])\d{8}$/;
  expect(phoneReg.test(result)).toBeTruthy();
});

it('生成随机身份证号码', () => {
  const result = rules.id();
  const idReg1 = /^\d{6}[03-9]$/; // 年份第一位
  const idReg2 = /^\d{6}(19|20)$/; //两位年份规则
  const idReg3 = /^\d{6}(19[3-9]|20[01])$/; //三位年份规则，仅支持193-199、200、201这些值
  const idReg4 = /^\d{6}(19[3-9][0-9]|20[1-2][0-9])$/; //四位年份规则
  const idReg5 = /^\d{10}[01]$/; //月份首位规则
  const idReg6 = /^\d{10}(0[1-9]|1[012])$/; //月份末位规则
  const idReg7 = /^\d{12}[0-3]$/; //日期首位规则
  const idReg8 = /^\d{12}([012][0-9]|3[01])$/; //日期末位规则
  expect(idReg1.test(result)).toBeTruthy
  expect(idReg2.test(result)).toBeTruthy
  expect(idReg3.test(result)).toBeTruthy
  expect(idReg4.test(result)).toBeTruthy
  expect(idReg5.test(result)).toBeTruthy
  expect(idReg6.test(result)).toBeTruthy
  expect(idReg7.test(result)).toBeTruthy
  expect(idReg8.test(result)).toBeTruthy
})
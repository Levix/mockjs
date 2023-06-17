import { it, expect, describe } from 'vitest';
import { isInteger, isPositiveInteger, isPositiveIntegerOrZero, addZero } from '../../src/utils/tool';
import log from '../../src/utils/log';

describe("测试log函数", () => {
  it("log方法", () => {
    expect(log.warn('test')).toBeUndefined();
    expect(log.info('test')).toBeUndefined();
  })
})

describe('测试isInteger()',() =>{
  it("isInteger('-1')的返回值是true", () => {
    expect(isInteger(-1)).toBe(true);
  })

  it("isInteger('1')的返回值是true", () => {
    expect(isInteger(1)).toBe(true);
  })

  it("isInteger('0')的返回值是true", () => {
    expect(isInteger(0)).toBe(true);
  })
})

describe('测试isPositiveInteger()',() =>{
  it("isPositiveInteger(-1)的返回值是false", () => {
    expect(isPositiveInteger(-1)).toBe(false);
  })

  it("isPositiveInteger(1)的返回值是true", () => {
    expect(isPositiveInteger(1)).toBe(true);
  })

  it("isPositiveInteger(0)的返回值是false", () => {
    expect(isPositiveInteger(0)).toBe(false);
  })

  it("isPositiveInteger(1.1)的返回值是false", () => {
    expect(isPositiveInteger(1.1)).toBe(false);
  })
})

describe('测试isPositiveIntegerOrZero()',() =>{
  it("isPositiveIntegerOrZero(-1)的返回值是false", () => {
    expect(isPositiveIntegerOrZero(-1)).toBe(false);
  })

  it("isPositiveIntegerOrZero(1)的返回值是true", () => {
    expect(isPositiveIntegerOrZero(1)).toBe(true);
  })

  it("isPositiveIntegerOrZero('0')的返回值是true", () => {
    expect(isPositiveIntegerOrZero(0)).toBe(true);
  })
  
  it("isPositiveIntegerOrZero(1.1)的返回值是false", () => {
    expect(isPositiveIntegerOrZero(1.1)).toBe(false);
  })
})

describe('测试addZero()',() =>{
  it("addZero(1)的返回值是 01", () => {
    expect(addZero(1)).toBe('01');
  })

  it("addZero(10)的返回值是 10", () => {
    expect(addZero(10)).toBe('10');
  })
})


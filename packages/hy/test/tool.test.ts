import { it, expect, describe } from 'vitest';
import { isInteger, isPositiveInteger, isPositiveIntegerOrZero, addZero } from '../utils/tool';

describe('测试isInteger()',() =>{
  it("isInteger('-1')的返回值", () => {
    expect(isInteger('-1')).toBe(true);
  })

  it("isInteger('1')的返回值", () => {
    expect(isInteger('1')).toBe(true);
  })

  it("isInteger('0')的返回值", () => {
    expect(isInteger('0')).toBe(true);
  })

  it("isInteger('ad')的返回值", () => {
    expect(isInteger('ad')).toBe(false);
  })

  // it("isInteger('1.1')的返回值", () => {
  //   expect(isInteger('1.1')).toBe(false);
  // })
})

describe('测试isPositiveInteger()',() =>{
  it("isPositiveInteger('-1')的返回值", () => {
    expect(isPositiveInteger('-1')).toBe(false);
  })

  it("isPositiveInteger('1')的返回值", () => {
    expect(isPositiveInteger('1')).toBe(true);
  })

  it("isPositiveInteger('0')的返回值", () => {
    expect(isPositiveInteger('0')).toBe(false);
  })

  it("isPositiveInteger('a')的返回值", () => {
    expect(isPositiveInteger('a')).toBe(false);
  })

  it("isPositiveInteger('1.1')的返回值", () => {
    expect(isPositiveInteger('1.1')).toBe(false);
  })
})

describe('测试isPositiveIntegerOrZero()',() =>{
  it("isPositiveIntegerOrZero('-1')的返回值", () => {
    expect(isPositiveIntegerOrZero('-1')).toBe(false);
  })

  it("isPositiveIntegerOrZero('1')的返回值", () => {
    expect(isPositiveIntegerOrZero('1')).toBe(true);
  })

  it("isPositiveIntegerOrZero('0')的返回值", () => {
    expect(isPositiveIntegerOrZero('0')).toBe(true);
  })
  
  // it("isPositiveIntegerOrZero('1.1')的返回值", () => {
  //   expect(isPositiveIntegerOrZero('1.1')).toBe(false);
  // })
})

describe('测试addZero()',() =>{
  it("addZero(1)的返回值", () => {
    expect(addZero(1)).toBe('01');
  })

  it("addZero(10)的返回值", () => {
    expect(addZero(10)).toBe('10');
  })
})
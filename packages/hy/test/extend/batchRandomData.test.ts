import { describe, expect, it } from "vitest";
import { random } from '../../src';

describe('测试 batchRandomData 方法', () => {
  it('batchRandomData(10, "string")返回值应该是一个长度为10的字符串数组', () => {
    const strs = '0123456789';
    const arr: string[] = random.batchRandomData(10, 'string')(strs);
    expect(arr).toBeInstanceOf(Array);
    expect(arr.length).toBe(10);
    expect(arr.every(item => strs.indexOf(item) > -1)).toBe(true);
  })

  it('batchRandomData(10, "number")返回值应该是一个长度为10的整数数组', () => {
    const arr: number[] = random.batchRandomData(10, 'number')(1, 10);
    expect(arr).toBeInstanceOf(Array);
    expect(arr.length).toBe(10);
    expect(arr.every(item => item <= 10)).toBe(true);
    expect(arr.every(item => item >= 1)).toBe(true);
  })

  it('batchRandomData(10, "boolean")返回值应该是一个长度为10的布尔值数组', () => {
    const arr: boolean[] = random.batchRandomData(10, 'boolean')(1, 10);
    expect(arr).toBeInstanceOf(Array);
    expect(arr.length).toBe(10);
    expect(arr.every(item => typeof item === "boolean")).toBe(true);
  })

  it('当获取一个不存在的随机类型数据的返回值', () => {
    expect(random.batchRandomData(10, 'A')).toBeUndefined();
  })
})
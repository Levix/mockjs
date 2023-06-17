import { describe, expect, it } from "vitest";
import { random } from '../../src';

describe("测试random.addType方法", () => {
  it("测试类型已存在", () => {
    expect(random.addType('string',() => true)).toBeUndefined();
  })

  it("测试添加一个新的自定义类型", () => {
    random.addType('test', () => true)
    const testData: boolean[] = random.batchRandomData(10, 'test')();
    expect(testData).toBeInstanceOf(Array);
    expect(testData.length).toBe(10);
    expect(testData.every(item => item === true)).toBe(true);
  })
})
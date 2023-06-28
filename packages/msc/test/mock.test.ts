import { it, expect, describe } from 'vitest';
import Mock from '../src/index';

describe('模板测试', () => {
  /* 属性值是字符串 */
  it('Mock.mock({ "str|3": "" })', t => {
    expect(JSON.stringify(Mock.mock({ 'str|3': '' }))).toMatch(/{"str":"\w{3}"}/);
  });

  it('Mock.mock({ "str|3": "x" })', t => {
    expect(Mock.mock({ 'str|3': 'x' })).toEqual({ str: 'xxx' });
  });

  it('Mock.mock({ "str|1-5": "x" })', t => {
    const ret = Mock.mock({ 'str|1-5': 'x' });
    expect(ret.str.length).within(1, 5);
  });

  /* 属性值是数值 */
  it('Mock.mock({ "number|1-100": 1 })', t => {
    const ret = Mock.mock({ 'number|1-100': 1 });
    expect(ret.number).within(1, 100);
  });

  it('Mock.mock({ "number|10.1-6": 1 })', t => {
    const ret = Mock.mock({ 'number|10.1-6': 1 });
    const len = String(ret.number).length;
    expect(len).within(3, 8);
  });

  /* 属性值是布尔值 */
  it('Mock.mock({ "boolean": true })', t => {
    const ret = Mock.mock({ boolean: true });
    expect(ret.boolean).toBeTypeOf('boolean');
  });

  /* 属性值是对象 */
  it('Mock.mock({"object|2":{"310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省"}})', t => {
    const ret = Mock.mock({
      'object|2': {
        310000: '上海市',
        320000: '江苏省',
        330000: '浙江省',
        340000: '安徽省',
      },
    });
    const len = Object.keys(ret.object).length;
    expect(len).toEqual(2);
  });

  it('Mock.mock({"object|1-3":{"310000":"上海市","320000":"江苏省","330000":"浙江省","340000":"安徽省"}})', t => {
    const ret = Mock.mock({
      'object|1-3': {
        310000: '上海市',
        320000: '江苏省',
        330000: '浙江省',
        340000: '安徽省',
      },
    });
    const len = Object.keys(ret.object).length;
    expect(len).within(1, 3);
  });

  // 属性值是数组
  it('Mock.mock({"array|1":["AMD","CMD","UMD"]})', t => {
    const ret = Mock.mock({
      'array|1': ['AMD', 'CMD', 'UMD'],
    });
    expect(ret.array[2]).toEqual('D');
  });

  it('Mock.mock({"array|1-3":[{"id":10}]})', t => {
    const ret = Mock.mock({
      'array|1-3': [{ 'id|1': 10 }],
    });
    const len = ret.array.length;
    expect(len).within(1, 3);
  });

  it('Mock.mock({"array|3":[{"id":10}]})', t => {
    const ret = Mock.mock({
      'array|3': [{ id: 10 }],
    });
    expect(ret).toEqual({
      array: [{ id: 10 }, { id: 10 }, { id: 10 }],
    });
  });

  it('Mock.mock({"array":[1,2,3]})', t => {
    const ret = Mock.mock({
      array: [1, 2, 3],
    });
    expect(ret).toEqual({
      array: [1, 2, 3],
    });
  });

  it('占位符测试', t => {
    expect(Mock.mock('@boolean()')).toBeTypeOf('boolean');
    expect(Mock.mock('@natural()')).toBeTypeOf('number');
    expect(Mock.mock('@natural(60, 100)')).within(60, 100);
    expect(Mock.mock('@integer()')).toBeTypeOf('number');
    expect(Mock.mock('@integer(-60, -10)')).within(-60, -10);
    expect(Mock.mock('@string()')).toBeTypeOf('string');
    expect(Mock.mock('@string("aeiou",1,5)')).toMatch(/^[aeiou]{1,5}$/);
    expect(Mock.mock('@date()')).toMatch(/^\d{4}-\d\d-\d\d$/);
    expect(Mock.mock('@string("aeiou",1)@string("aeiou",1)')).toMatch(/^[aeiou]{2}$/);
  });
});

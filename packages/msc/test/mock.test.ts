import { it, expect, describe } from 'vitest';
import Mock from '../src/index';

describe('模板测试', () => {
  /* 数据模板定义 (Data Temaplte Definition，DTD) */

  /* string */
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

  /* number */
  it('Mock.mock({ "number|1-100": 1 })', t => {
    const ret = Mock.mock({ 'number|1-100': 1 });
    expect(ret.number).within(1, 100);
  });

  it('Mock.mock({ "number|10.1-6": 1 })', t => {
    const ret = Mock.mock({ 'number|10.1-6': 1 });
    const len = String(ret.number).length;
    expect(len).within(4, 18);
  });

  it('Mock.mock({ "number|+1": 20 })', t => {
    const ret = Mock.mock({
      'list|3': [{ 'id|+1': 20 }],
    });
    expect(ret).toEqual({
      list: [{ id: 20 }, { id: 21 }, { id: 22 }],
    });
  });

  /* boolean */
  it('Mock.mock({ "boolean": true })', t => {
    const ret = Mock.mock({ 'boolean|1': true });
    expect(ret.boolean).toBeTypeOf('boolean');
  });

  /* object */
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

  /* array */
  // 'name|1': array
  it('Mock.mock({"array|1":["AMD","CMD","UMD"]})', t => {
    const ret = Mock.mock({
      'array|1': ['AMD', 'CMD', 'UMD'],
    });
    expect(ret.array[2]).toEqual('D');
  });

  // 'name|+1': array
  it('Mock.mock({"array|+1":["AMD","CMD","UMD"]})', t => {
    const ret = Mock.mock({
      'array|+1': ['AMD', 'CMD', 'UMD'],
    });
    expect(ret.array).toEqual('AMD');
  });

  // 'name|min-max': array
  it('Mock.mock({"array|1-3":[{"id|+1":10}]})', t => {
    const ret = Mock.mock({
      'array|1-3': [{ 'id|+1': 10 }],
    });
    const len = ret.array.length;
    expect(len).within(1, 3);
  });

  // 'name|count': array
  it('Mock.mock({"array|3":[{"id|+1":10}]})', t => {
    const ret = Mock.mock({
      'array|3': [{ 'id|+1': 10 }],
    });
    expect(ret).toEqual({
      array: [{ id: 10 }, { id: 11 }, { id: 12 }],
    });
  });

  // 'name': array
  it('Mock.mock({"array":[1,2,3]})', t => {
    const ret = Mock.mock({
      array: [1, 2, 3],
    });
    expect(ret).toEqual({
      array: [1, 2, 3],
    });
  });

  /* function */
  // 'name': function
  it('Mock.mock({ "name": function })', t => {
    const ret = Mock.mock({
      bar: {
        foo: 'inner',
        name(root) {
          return `this: ${this.foo}, root: ${root.foo}`;
        },
      },
      foo: 'outer',
    });
    expect(ret).toEqual({
      bar: {
        foo: 'inner',
        name: 'this: inner, root: outer',
      },
      foo: 'outer',
    });
  });
});

import { it, expect } from 'vitest';
import { string } from '../src/module/string';

it('生成长度为5的纯英文的随机字符串', () => {
    const result = string.en(5);
    expect(result).toBeTypeOf('string');
    expect(result).toHaveLength(5);
});

it('生成长度为5的纯数字的随机字符串', () => {
    const result = string.num(5);
    const regTestVal = /(\d){5}/.test(result);
    expect(result).toBeTypeOf('string');
    expect(result).toHaveLength(5);
    expect(regTestVal).toBeTruthy();
});

it('生成长度为5的纯中文的随机字符串', () => {
    const result = string.zh(5);
    const regTestVal = /[\u4e00-\u9fa5]{5}/g.test(result);
    expect(result).toBeTypeOf('string');
    expect(result).toHaveLength(5);
    expect(regTestVal).toBeTruthy();
});

it('生成长度为5的中英文的随机字符串', () => {
    const result = string.zh_en(5);
    const regTestVal = /[\u4e00-\u9fa5]|\d/.test(result);
    expect(result).toBeTypeOf('string');
    expect(result).toHaveLength(5);
    expect(regTestVal).toBeTruthy();
});

it('生成长度为5的英文数字的随机字符串', () => {
    const result = string.en_num(5);
    expect(result).toBeTypeOf('string');
    expect(result).toHaveLength(5);
});

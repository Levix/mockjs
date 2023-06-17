import { describe, expect, it, vi } from "vitest";
import person from "../person";
import { log } from "../../helper/logger";

vi.mock('../../helper/logger', () => {
  return {
    log: {
        alert: vi.fn(),
        info: vi.fn(),
        warn: vi.fn(),
    },
  };
});

describe('Person ID', () => {
    it('测试生成Person ID', () => {
        expect(person.id()).toBeTypeOf('string');
    });
    
    it('测试生成错误长度', () => {
        person.id(0);
        expect(log.alert).toHaveBeenCalledWith('指定id长度小于1')
    });

    it('测试生成指定长度的Person ID', () => {
        expect(person.id(1)).toHaveLength(1);
        expect(person.id(20)).toHaveLength(20);
    });
});

describe('Person Phone', () => {
    it('测试生成Person Phone', () => {
        expect(person.phone()).toBeTypeOf('string');
    });

    it('测试生成指定长度的Person Phone', () => {
        expect(person.phone(20)).toHaveLength(20);
        expect(person.phone(1)).toHaveLength(1);
    });
});

describe('Person Name', () => {
    it('测试生成Person Name', () => {
        expect(person.name()).toBeTypeOf('string');
        const nameArr = person.name().split(' ');
        expect(nameArr).toHaveLength(2);

        const engNameRgx = /^[A-Z][a-zA-Z]{0,4}$/;
        expect(engNameRgx.test(nameArr[0])).toBe(true);
        expect(engNameRgx.test(nameArr[1])).toBe(true);
    });
});

describe('Person CName', () => {
    it('测试生成Person CName', () => {
        expect(person.cName()).toBeTypeOf('string');
        const nameArr = person.cName().split(' ');
        expect(nameArr).toHaveLength(2);
        const chNameRgx = /^[\u4e00-\u9fa5]{1,5}$/;
        expect(chNameRgx.test(nameArr[0])).toBe(true);
        expect(chNameRgx.test(nameArr[1])).toBe(true);
    });
});

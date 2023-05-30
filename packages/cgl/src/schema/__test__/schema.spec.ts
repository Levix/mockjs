import { describe, it, expect } from "vitest";
import getSchema from "..";
import { getRuleInstance } from "../../rules";

const Rule = getRuleInstance();

describe('getInteger', () => {
    it('测试Schema', () => {
        const schema = getSchema(Rule);

        const minLen = 2;
        const maxLen = 3;
        const pool = 'a';

        const data = schema({
            data1: ['personSleep', void 0],
            data2: ['personSleep', void 0, [2, 3]],
            data3: ['mockString', { minLen, maxLen, pool }, [2, 3]],
        });

        const { data1, data2, data3 } = data;

        expect(data1).toHaveProperty(['name']);
        expect(data1).toHaveProperty(['id']);
        expect(data1).toHaveProperty(['date']);
        expect(Array.isArray(data2));
        expect(data2.length).toBeGreaterThanOrEqual(2);
        expect(data2.length).toBeLessThanOrEqual(3);
        expect(Array.isArray(data3)).toBe(true);
    });
});

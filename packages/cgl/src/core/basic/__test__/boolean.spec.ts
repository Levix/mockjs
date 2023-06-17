import { describe, expect, it } from "vitest";
import { getBool } from "../boolean";

describe('getBool', () => {
    it('获取随机布尔值', () => {
        expect(getBool()).toBeTypeOf('boolean');
    });

    it('获取100%为false的布尔值', () => {
        expect(getBool(0)).toBe(false);
    });

    it('获取100%为true的布尔值', () => {
        expect(getBool(1)).toBe(true);
    });
});

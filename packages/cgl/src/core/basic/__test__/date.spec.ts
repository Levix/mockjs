import { describe, it, expect } from "vitest";
import { getDate } from "../date";

describe('getDate', () => {
    it('获取随机日期对象', () => {
        const randomDate = getDate();
        expect(randomDate instanceof Date).toBe(true);
        expect(isNaN(randomDate.getTime())).toBe(false);
    });

    it('获取指定范围的日期对象', () => {
        const startDate = '2022-01-01';
        const endDate = '2022-12-31';
        const randomDate = getDate(startDate, endDate);
        const randomTimestamp = randomDate.getTime();

        const startTimestamp = new Date(startDate).getTime();
        const endTimestamp = new Date(endDate).getTime();

        expect(randomTimestamp).toBeGreaterThanOrEqual(startTimestamp);
        expect(randomTimestamp).toBeLessThanOrEqual(endTimestamp);
    });
});

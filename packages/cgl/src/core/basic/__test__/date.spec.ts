import { describe, it, expect, vi } from "vitest";
import { getDate } from "../date";
import { log } from "../../../helper/logger";

vi.mock('../../../helper/logger', () => {
  return {
    log: {
      alert: vi.fn(),
      info: vi.fn(),
      warn: vi.fn(),
    },
  };
});

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

    it('测试传递错误时间参数', () => {
        getDate('', '');

        expect(log.alert).toHaveBeenCalledWith('解析时间失败');
    });
});

import { describe, expect, it, vi } from 'vitest';
import { MockR } from '..';
import { logger } from '../../helper/logger';

const r = new MockR();

describe('rule', () => {
    it('install rule', () => {
        const key = 'a';
        const callback = () => {
            return 'a';
        };

        r.install(key, callback);
        expect(r.use(key)).toEqual(callback);
    });

    it('remove rule', () => {
        const key = 'a';
        const callback = () => {
            return 'a';
        };

        r.install(key, callback);
        r.remove(key);
        expect(r.use(key)).toEqual(undefined);
    });

    it('key can not be duplicated', () => {
        const key = 'a';
        const callback = () => {
            return 'a';
        };

        r.install(key, callback);
        const x = vi.spyOn(logger, 'error');

        r.install(key, callback);
        expect(x).toHaveBeenCalledWith('key exist');
    });

    it('key not found', () => {
        const key = 'accc';
        const x = vi.spyOn(logger, 'error');

        r.remove(key);
        expect(x).toHaveBeenCalledWith('not key found');
    });
});

import { it, expect, describe } from 'vitest';
import { Random } from '../../src/index';

describe('Random misc', () => {
  it('Random.uuid', () => {
    expect(Random.uuid()).toMatch(/^[\da-f]{8}(-[\da-f]{4}){3}-[\da-f]{12}$/);
    expect(Random.guid()).toMatch(/^[\da-f]{8}(-[\da-f]{4}){3}-[\da-f]{12}$/);
  });

  it('Random.id', () => {
    expect(Random.idCard()).toMatch(/^[\dX]{18}$/);
  });

  it('Random.mobile', () => {
    expect(Random.mobile()).toMatch(/^1[3|4|5|7|8][0-9]{9}$/);
  });
});

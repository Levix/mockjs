import { it, expect } from 'vitest';
import mock from '../src';

it('simple', () => {
  expect(mock).toBe('foo');
});

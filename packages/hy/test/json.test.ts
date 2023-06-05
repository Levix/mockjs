import { it, describe } from 'vitest';
import { random } from '../src/index';
import { json } from '../src/test';

describe('random.getRandomJson()方法', () => {
  it('random.getRandomJson()返回值', () => {
    console.log(random.getRandomJson(json));
  })
})
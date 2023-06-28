import generator, { Random } from './generator';
import { MockExtend } from './extend';
export { Random };

export function mock(tem: any) {
  const mockData = generator(tem, '');
  return mockData;
}

const extend = new MockExtend();

export { extend };
// 默认导出
export default {
  mock,
  Random,
  extend,
};

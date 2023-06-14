import generator, { Random } from './generator';

export { Random };

export function mock (any: any) {
  const opts = { rootTpl: any, callbacks: [] };
  const root = generator(any, '', opts);

  // 处理函数回调
  opts.callbacks.forEach((opt: any) => {
    opt.parent[opt.key] = opt.fn.call(opt.parent, root);
  });

  return root;
}

// 默认导出
export default {
  mock,

  Random,
};

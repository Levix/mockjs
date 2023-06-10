// 扩展对象
export const extend = <P extends Record<string, any>, S extends Record<string, any>>(prop: P, source: S): P & S => {
  return Object.assign(prop, source);
};

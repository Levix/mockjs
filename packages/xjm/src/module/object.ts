interface Keys {
  key: string;
  value: (...params: unknown[]) => any;
}

export const object = (keys: Keys[]) => {
  const obj: { [key: string]: any } = {};
  keys.forEach(key => {
    obj[key.key] = key.value();
  });
  return obj;
};

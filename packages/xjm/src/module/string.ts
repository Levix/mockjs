const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export const string = (unit: number) => {
  let str = '';
  for (let i = 0; i < unit; i += 1) {
    const chat = characters[Math.floor(Math.random() * characters.length)];
    str += chat;
  }
  return str;
};

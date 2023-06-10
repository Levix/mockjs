export const date = () => {
  const start = new Date(1970, 0, 1).getTime();
  const end = new Date().getTime();
  const time = start + Math.floor((end - start) * Math.random());
  return new Date(time);
};

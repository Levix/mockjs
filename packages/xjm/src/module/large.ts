export const large = (num: number) => {
  const mockData = [];

  for (let i = 0; i < num; i++) {
    const data = {
      id: i + 1,
      name: `Mock Name ${i + 1}`,
      age: Math.floor(Math.random() * 50) + 20
    };
    mockData.push(data);
  }

  return mockData;
}
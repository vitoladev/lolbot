const generateRandom = (max: number) => {
  const min = Math.ceil(1);
  return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
};

export default generateRandom;

export const convertStrToDate = (str: string): Date => {
  // 10/08/2018
  const [month, day, year] = str.split('/');

  return new Date(Number(year), Number(month) - 1, Number(day));
};

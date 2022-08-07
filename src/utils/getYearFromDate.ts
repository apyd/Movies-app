export const getYearFromDate = (date: string) => {
  if (typeof date !== 'string') {
    return
  }
  return date.substring(0, 4);
};

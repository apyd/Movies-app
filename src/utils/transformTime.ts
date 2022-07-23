const MINUTES_IN_HOUR = 60;

export const transformMinutesToHoursAndMinutes = (time: number) => {
  const hours = Math.floor(time / MINUTES_IN_HOUR);
  const minutes = time % MINUTES_IN_HOUR;
  return `${hours}h ${minutes}min`;
};

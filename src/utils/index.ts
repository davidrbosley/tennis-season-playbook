function addDays(fromDate: Date, days: number): Date {
  const date = new Date();
  date.setTime(fromDate.getTime() + days * 24 * 60 * 60 * 1000);
  return date;
}

export { addDays };

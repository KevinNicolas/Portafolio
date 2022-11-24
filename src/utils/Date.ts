export const getYearForString = (yearString?: string): string | null => {
  if (!yearString) return null;
  const date = new Date(yearString);

  return date.getFullYear().toString();
};

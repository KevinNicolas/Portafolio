export const toHsl = (arrayToParse: [number, number, number]): string => {
  const [hue, saturation, luminosity] = arrayToParse;
  return `hsl(${hue}, ${saturation}%, ${luminosity}%)`;
};

import { Colors } from "@assets/styles";

export const getThemeProp =
  (themeProp: keyof Colors) =>
  ({ theme }: { theme: Colors }) =>
    theme[themeProp];

export const parseHexToRgba = (hexToParse: string): [number, number, number, number] => {
  let hexValues = hexToParse.includes("#") ? hexToParse.split("#")[1] : hexToParse;

  if (!hexValues || hexValues === "") {
    console.error(hexToParse, "is not a hex value");
    return [0, 0, 0, 1];
  }

  const isShortHex = hexValues.length < 6;

  const R_value = parseInt(isShortHex ? hexValues.substring(0, 1) : hexValues.substring(0, 2), 16);
  const G_value = parseInt(isShortHex ? hexValues.substring(1, 2) : hexValues.substring(2, 4), 16);
  const B_value = parseInt(isShortHex ? hexValues.substring(2, 3) : hexValues.substring(4, 6), 16);

  const haveAlpha = isShortHex ? hexValues.length > 3 : hexValues.length > 6;
  let alpha = 1;

  if (haveAlpha) {
    if (isShortHex) alpha = parseInt(hexValues.substring(3, 4), 16);
    else alpha = parseInt(hexToParse.substring(6, 8), 16);
  }

  return [R_value, G_value, B_value, alpha];
};

export const parseHexToRgbaString = (hexToParse: string, addAlpha = false): string => {
  const [R, G, B, alpha] = parseHexToRgba(hexToParse);

  const rgbValue = `${R} ${G} ${B}`;

  if (addAlpha) return `${rgbValue} / ${alpha}`;
  return rgbValue;
};

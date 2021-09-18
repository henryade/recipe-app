export const Capitalize = (str: string) => {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}

export const SanitizeWord = (str: string) => {
  str = str.replace(/[^a-z0-9A-Z,() ]{2,}/g, "").replace(/[^a-zA-Z0-9,'() /-]/gim,"").replace(/^[^a-zA-Z0-9](\w+)/, "$1").replace(/(\w+)[^a-zA-Z0-9]$/, "$1").replace(/^[^a-z0-9A-Z]{1,}$/g, "");
  return str.trim();
}

export const SanitizeString = (str: string) => {
  str = str.replace(/[^a-zA-Z0-9,'() -/]/gi,"").replace(".", "");
  return str;
  // return str.trim();
}

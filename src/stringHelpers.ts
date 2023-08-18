export const getNotionScriptFromFunction = (notionFunction: () => void): string => `${notionFunction}`
  .replace('() => ', "") // remove arrow function
  .replace(/\\u\{([0-9a-fA-F]+)\}/g, (_, unicode) => String.fromCodePoint(parseInt(unicode, 16))) // replace unicode to emoji
  .replace(/;/g, "") // remove semicolons
  .replace(/\n/g, "") // remove new lines
  .replace("&&", "and") // replace js operators with notion operators
  .replace("||", "or") // replace js operators with notion operators
  .replace(/\s+/g, " ") // remove multiple spaces
  .replace(/===/g, "==") // replace js operators with notion operators
  .replace(/(\w+)\(/g, match => match.toLowerCase()) // lowercase function names
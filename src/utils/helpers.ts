import { words, conjunctions } from "./constants";

// gets property from object with bracket notation, otherwise TS complains
export function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
  return o[propertyName]; // o[propertyName] is of type T[K]
}

function searchWordsByNumber(num: number) {
  for (const key in words) {
    const innerObj = words[key];
    for (const innerKey in innerObj) {
      const innerVal = innerObj[innerKey];
      if (innerVal === num) {
        return innerKey;
      }
    }
  }
  return "matchingWords";
}

export const generateCaw = ({
  template,
  words,
  conjunction,
  template2,
  words2,
}: {
  template: number;
  words: number;
  conjunction?: number;
  template2?: number;
  words2?: number;
}) => {
  let firstLine = replaceAsterisks(template, words);

  console.log("firstLine: ", firstLine);
  console.log("conjunction: ", conjunction);
  console.log("template2: ", template2);
  console.log("words2: ", words2);

  if (conjunction) {
    console.log("yes conjunction");
    const conjunctionString =
      Object.keys(conjunctions).filter(
        (key) => getProperty(conjunctions, key) === conjunction
      )[0] ?? "";
    firstLine += ` ${conjunctionString}`;
    console.log("firstLine: ", firstLine);
    if (template2 && words2) {
      const secondLine = replaceAsterisks(template2, words2);
      console.log("second line: ", secondLine);
      firstLine += ` ${secondLine}`;
    }
  }

  return firstLine;
};

export const replaceAsterisks = (template: number, word: number) => {
  const wordString = searchWordsByNumber(word);

  switch (template) {
    case 1:
      return `${wordString} ahead`;
    case 2:
      return `Likely ${wordString}`;
    case 3:
      return `If only I had a ${wordString}...`;
    case 4:
      return `${wordString}, O ${wordString}`;
    case 5:
      return `Ahh, ${wordString}...`;
    case 6:
      return `No ${wordString} ahead`;
    case 7:
      return `First off, ${wordString}`;
    case 8:
      return `Didn't expect ${wordString}...`;
    case 9:
      return `Behold, ${wordString}!`;
    case 10:
      return `${wordString} required ahead`;
    case 11:
      return `Seek ${wordString}`;
    case 12:
      return `Visions of ${wordString}...`;
    case 13:
      return `Offer ${wordString}`;
    case 14:
      return `${wordString}!`;
    case 15:
      return `Be wary of ${wordString}`;
    case 16:
      return `Still no ${wordString}...`;
    case 17:
      return `Could this be a ${wordString}?`;
    case 18:
      return `Praise the ${wordString}!`;
    case 19:
      return `${wordString}?`;
    case 20:
      return `Try ${wordString}`;
    case 21:
      return `Why is it always ${wordString}?`;
    case 22:
      return `Time for ${wordString}`;
    case 23:
      return `Let there be ${wordString}`;
    case 24:
      return `${wordString}...`;
    default:
      return "";
  }
};

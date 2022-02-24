const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const bigs = ["hundred", "thousand", "million", "billion", "trillion"];

export const numToWords = (num) => {
  const numString = num.toString();

  if (num === 0) return "zero";
  if (num < 20) return ones[num];
  if (numString.length === 2) {
    return numString[1] === "0"
      ? tens[numString[0]]
      : tens[numString[0]] + "-" + ones[numString[1]];
  }

  // 100 - 999
  if (numString.length === 3) {
    if (numString[1] === "0" && numString[2] === "0")
      return `${ones[numString[0]]} ${bigs[0]}`;
    else
      return `${ones[numString[0]]} ${bigs[0]} and ${numToWords(
        parseInt(numString[1] + numString[2])
      )} `;
  }

  // 1000 - 9999
  if (numString.length === 4) {
    if (numString[1] === "0" && numString[2] === "0" && numString[3] === "0")
      return `${ones[numString[0]]} ${bigs[1]}`;
    else
      return `${ones[numString[0]]} ${bigs[1]} ${
        numString[1] === "0" ? "and" : ""
      } ${numToWords(parseInt(numString[1] + numString[2] + numString[3]))}`;
  }
  // 10000 - 99999
  if (numString.length === 5) {
    if (
      numString[1] === "0" &&
      numString[2] === "0" &&
      numString[3] === "0" &&
      numString[4] === "0"
    )
      return `${numToWords(parseInt(numString[0] + numString[1]))} ${bigs[1]}`;
    else
      return `${numToWords(parseInt(numString[0] + numString[1]))} ${
        bigs[1]
      } ${numToWords(parseInt(numString[2] + numString[3] + numString[4]))} 
      `;
  }
  // 100000 - 999999
  if (numString.length === 6) {
    let rest = numString.slice(2, 5);
    return `${numToWords(
      parseInt(numString[0] + numString[1] + numString[2])
    )}  ${bigs[1]} ${parseInt(rest) > 0 ? numToWords(parseInt(rest)) : ""}`;
  }
};

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
const thousands = [
  "",
  "",
  "hundred",
  "thousand",
  "million",
  "billion",
  "trillion",
];

export const numToWords = (num) => {
  if (num < 0) throw new Error("Negative numbers are not supported");
  if (num === 0) return "zero";
  if (num < 20) return ones[num];
  if (num.length === 2) {
    let reminder = num % 10;
    return reminder ? tens[num[0]] + "-" + ones[num[1]] : tens[num[0]];
  }
};

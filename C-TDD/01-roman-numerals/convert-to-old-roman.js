// FOR TEST - "returns I if passed 1 as an argument"
// function convertToOldRoman(n) {
//   let roman = "";

//   for (let i = 1; i <= n; i++) {
//     roman += "I";
//   }

//   return roman;
// }

// console.log(convertToOldRoman(4));

// FOR TEST - "returns VII if passed 7 as an argument"
// function convertToOldRoman(n) {
//   let roman = "";
//   let howMany5s10s;

//   howMany5s10s = Math.floor(n / 5);

//   for (let i = 1; i <= howMany5s10s; i++) {
//     roman += "V";
//     n -= 5;
//   }

//   for (let i = 1; i <= n; i++) {
//     roman += "I";
//   }

//   return roman;
// }

// FOR TEST - "returns XV if passed 15 as an argument"
function convertToOldRoman(n) {
  let roman = "";
  let howMany5s10s;

  howMany5s10s = Math.floor(n / 10);

  for (let i = 1; i <= howMany5s10s; i++) {
    roman += "X";
    n -= 10;
  }

  howMany5s10s = Math.floor(n / 5);

  for (let i = 1; i <= howMany5s10s; i++) {
    roman += "V";
    n -= 5;
  }

  for (let i = 1; i <= n; i++) {
    roman += "I";
  }

  return roman;
}

console.log(convertToOldRoman(239));

module.exports = convertToOldRoman;

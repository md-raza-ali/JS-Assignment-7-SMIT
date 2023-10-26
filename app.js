// CHAPTER 38 TO 42

// ANSWER NO: 01
function power(a, b) {
  let result = 1;
  for (let i = 1; i <= b; i++) {
    result = result * a;
  }
  return result;
}
let a = +prompt("Enter a number..");
let b = +prompt("Enter a power..");
alert(power(a, b));

// ANSWER NO: 02
// function leapYear(year) {
//   if (
//     year == "2000" ||
//     year == "2004" ||
//     year == "2008" ||
//     year == "2012" ||
//     year == "2016" ||
//     year == "2020"
//   ) {
//     alert("That was the leap year!");
//   } else if (
//     year == "2024" ||
//     year == "2028" ||
//     year == "2032" ||
//     year == "2036" ||
//     year == "2040" ||
//     year == "2044" ||
//     year == "2048"
//   ) {
//     alert("It will be the leap year!");
//   } else {
//     alert("It is not the leap year!");
//   }
// }
// let year = prompt("Enter any Year..");
// leapYear(year);

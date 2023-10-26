// CHAPTER 38 TO 42

// ANSWER NO: 01
// function power(a, b) {
//   let result = 1;
//   for (let i = 1; i <= b; i++) {
//     result = result * a;
//   }
//   return result;
// }
// let a = +prompt("Enter a number..");
// let b = +prompt("Enter a power..");
// alert(power(a, b));

// ANSWER NO: 02
function leapYear(year) {
  if (
    leapYear == "2000" ||
    leapYear == "2004" ||
    leapYear == "2008" ||
    leapYear == "2012" ||
    leapYear == "2016" ||
    leapYear == "2020"
  ) {
    alert("That was the leap year!");
  } else if (
    leapYear == "2028" ||
    leapYear == "2032" ||
    leapYear == "2036" ||
    leapYear == "2040" ||
    leapYear == "2044" ||
    leapYear == "2048"
  ) {
    alert("It will be leap year!");
  } else {
    alert("It is not the leap year!");
  }
}
let year = prompt("Enter any Year..");
alert(leapYear(year));

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

// ANSWER NO: 03
// function semi(a, b, c) {
//   return (a + b + c) / 2;
// }
// function areaOfTriangle(a, b, c) {
//   let s = semi(a, b, c);
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }
// let a = +prompt("Enter length A");
// let b = +prompt("Enter length B");
// let c = +prompt("Enter length C");
// let area = areaOfTriangle(a, b, c);

// alert("Area of triangle" + area);

// ANSWER NO: 04
// function average(math, phy, compSci) {
//   let result = (math + phy + compSci) / 3;
//   return result;
// }
// function percentage(obtain, total) {
//   let result = (obtain / total) * 100;
//   return result;
// }
// function mainFunction(math, phy, compSci) {
//   let ave = average(math, phy, compSci);
//   let obtain = math + phy + compSci;
//   let total = 300;
//   let per = percentage(obtain, total);
//   document.write("Average: " + ave);
//   document.write("<br>Percentage: " + per + "%");
// }
// let math = +prompt("Enter marks of Mathematics");
// let phy = +prompt("Enter marks of Physics");
// let compSci = +prompt("Enter marks of Computer");
// mainFunction(math, phy, compSci);

// ANSWER NO: 08
// function meter(input) {
//   return input * 1000;
// }
// function feet() {
//   let mtr = meter();
//   return input * 3.28084;
// }
// function inches() {
//   let mtr = meter();
//   return input * 39.3701;
// }
// function centi() {
//   let mtr = meter();
//   return input * 100;
// }
// let input = +prompt("Enter distance in Kilometer..");
// document.write(`Distance in Meter: ${meter(input)}   (m)`);
// document.write(`<br>Distance in Feet: ${feet(input)}   (ft)`);
// document.write(`<br>Distance in Inches: ${inches(input)}   (in)`);
// document.write(`<br>Distance in Centimeter: ${centi(input)}   (cm)`);


// ANSWER NO: 09
// let work = 40;
// let overTimePAy = 12;
// let overTime = +prompt("Enter total hours worked..");
// if(overTime > work){
//   var overTimeWorked = overTime - work;
//   var result = overTimeWorked * overTimePAy;
//   alert(`Overtime Pay Rs: ${result}`);
// }else{
//   alert("No overtime hours..");
// }

// ANSWER NO: 10

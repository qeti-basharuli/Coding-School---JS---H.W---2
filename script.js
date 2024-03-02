"use strict";

// 1. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:

function sum(...numbers) {
  let numbersSum = 0;
  for (let items of numbers) {
    numbersSum += items;
  }
  return numbersSum;
}
let sumResult = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
let sumResult2 = sum(10, 50, 7);
console.log(sumResult2);

// 2. ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ:'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

let user = {
  firstName: "გიორგი",
  lastName: "სააკაძე",
  age: 32,
  isloggedin: true,
};

function printName(user) {
  if (user.isloggedin) {
    return `${user.firstName} ${user.lastName}`;
  }
  return true;
}
let result = printName(user);
console.log(result);

// 3. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
//    (აქ მეორე ვარიანტიც შეგვიძლია დავამატოთ ამ მასალით: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max )

// function maxNumber(number) {
//   for (let items of number) return items;
// }

// let result2 = maxNumber(Math.max[(5, 10, 15, 2, 95, 20, -15)]);
// console.log(result2);

// 4. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი;
//    თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd;

function newNumberFnc(number) {
  if (number % 2 == 0) {
    console.log("this number is even");
  } else {
    console.log("this number is odd");
  }
}

newNumberFnc();

// 5. მოცემულია მასივი: let array = [1,2,3,4,5];
//    for ციკლის საშუალებით მიიღეთ reverse ვერსია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// . . .
let array1 = [1, 2, 3, 4, 5];

array1.reverse();
console.log(array1);

// 6. ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი (არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა:
//    თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულწლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი.
//    ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

let userAge = function (birthYear, yearNow) {
  let age = yearNow - birthYear;
  let ageResult = age > 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
  return ageResult;
};

let resultAge1 = userAge(2000, 2024);
let resultAge2 = userAge(2014, 2024);
console.log(resultAge1);
console.log(resultAge2);

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const arr = ['a', 'b', 'c', 'd', 'e'];

// slice() :-> take 2 args (indexfromWhereElementsToBeDeleted, indexUntilWhereElementToBeDeleted) doesn't mutuate original array but returns a new array

const printarr1 = arr.slice(2, 4);
console.log(printarr1);
console.log(arr.slice(1, -2));
console.log(arr.slice(3));
console.log(arr.slice(-3));

// splice() :-> takes 2 arguments(indexPosition, noOfElementsToBeDeleted). It mutates the original array.

const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.splice(1));
console.log(arr2);
const arr3 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr3.splice(2, 2));
console.log(arr3);
const arr4 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr4.splice(-2, 2));
console.log(arr4);

// Reverse : it reverses the whole array. It mutuates the original array

const arr5 = ['a', 'b', 'c', 'd', 'e'];
const arr6 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr6.reverse());

//Concat : it doesn't mutates, returns a new array. joins the two arrays
console.log(arr5.concat(arr6));
console.log(arr5);

const letters = arr5.concat(arr6);
console.log(letters.join(' - '));

// at method
const arr7 = [2, 6, 33, 54, 65];
console.log(arr7[0]);
console.log(arr7.at(0));

//getting the last element of an array
console.log(arr7[arr7.length - 1]);
console.log(arr7.slice(-1)[0]);
console.log(arr7.at(-1));

// Also works on strings
const str1 = 'jonas';
console.log(str1.at(1));

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
'use strict'

// Task №1
let startNumber = 0.7;
if (randomNumber > startNumber) {
    alert(`${randomNumber} > ${startNumber}`);
}

// Task №2
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let lenArrNumbers = arrNumbers.length;

for (let i = 0; i < lenArrNumbers; i++) {
    console.log(arrNumbers[i]);
}

for (let namber of arrNumbers) {
    console.log(namber);
}

// Task №3
for (let i = 8; i <= lenArrNumbers && i >= 0; i--) {
    console.log(arrNumbers[i]);
}

// Task №4
const oneMoreRandomNumber = Math.random();
let endNumber = 0.2;

if (randomNumber > startNumber && oneMoreRandomNumber > startNumber) {
    alert('оба числа больше 0.7.');
} else if (randomNumber < endNumber || oneMoreRandomNumber < endNumber) {
    alert('одно из них НЕ больше 0.2.');
}

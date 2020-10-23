const btnZero = document.getElementById('btn-zero');
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnFour = document.getElementById('btn-four');
const btnFive = document.getElementById('btn-five');
const btnSix = document.getElementById('btn-six');
const btnSeven = document.getElementById('btn-seven');
const btnEight = document.getElementById('btn-eight');
const btnNine = document.getElementById('btn-nine');
const btnDot = document.getElementById('btn-dot');

const btnAC = document.getElementById('btn-ac');
const btnPlusOnMinus = document.getElementById('btn-plus-on-minus');
const btnPercent = document.getElementById('btn-percent');
const btnDivision = document.getElementById('btn-division');
const btnMultiply = document.getElementById('btn-multiply');
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const btnResult = document.getElementById('btn-result');

const resultLog = document.getElementById('results');

function addNubber(nubber) {
    if (oldResult == userInput.value) {
        userInput.value = '';
    }
    userInput.value = userInput.value + nubber;
}

function addNubberZero() {
    if (userInput.value != '') {
        addNubber(0)
    }
}

function addNubberOne() {
    addNubber(1)
}

function addNubberTwo() {
    addNubber(2)
}

function addNubberThree() {
    addNubber(3)
}

function addNubberFour() {
    addNubber(4)
}

function addNubberFive() {
    addNubber(5)
}

function addNubberSix() {
    addNubber(6)
}

function addNubberSeven() {
    addNubber(7)
}

function addNubberEight() {
    addNubber(8)
}

function addNubberNine() {
    addNubber(9)
}

function addDot() {
    addNubber('.')
}

btnZero.addEventListener('click', addNubberZero);
btnOne.addEventListener('click', addNubberOne);
btnTwo.addEventListener('click', addNubberTwo);
btnThree.addEventListener('click', addNubberThree);
btnFour.addEventListener('click', addNubberFour);
btnFive.addEventListener('click', addNubberFive);
btnSix.addEventListener('click', addNubberSix);
btnSeven.addEventListener('click', addNubberSeven);
btnEight.addEventListener('click', addNubberEight);
btnNine.addEventListener('click', addNubberNine);
btnDot.addEventListener('click', addDot);

function addSign(sign) {
    if (userInput.value != '') {
        userInput.value = userInput.value + sign;
    }
}

function functionPlus() {
    addSign(' + ');
}

function functionMinus() {
    addSign(' - ');
}

function functionMultiply() {
    addSign(' * ');
}

function functionDivision() {
    addSign(' / ');
}

btnPlus.addEventListener('click', functionPlus);
btnMinus.addEventListener('click', functionMinus);
btnMultiply.addEventListener('click', functionMultiply);
btnDivision.addEventListener('click', functionDivision);

function clear() {
    userInput.value = '';
}

btnAC.addEventListener('click', clear);

function plusOnMinus() {
    if (userInput.value.charAt(0) != '-') {
        userInput.value = '-' + userInput.value;
    } else {
        userInput.value = userInput.value.substring(1);
    }
}

btnPlusOnMinus.addEventListener('click', plusOnMinus);

function percent() {
    userInput.value = parseFloat(userInput.value) / 100;
}

btnPercent.addEventListener('click', percent);

let oldResult = '';

function getResult() {
    let input = userInput.value;
    let subStrings = input.split(' ');
    let l = parseFloat(subStrings[0]);
    let r = parseFloat(subStrings[2]);
    let result = 0;

    switch (subStrings[1]) {
        case "+": result = l + r; break;
        case "-": result = l - r; break;
        case "*": result = l * r; break;
        case "/": result = l / r; break;
    }

    let rounded = function(number){
        return +number.toFixed(6);
    }

    userInput.value = rounded(result);
    oldResult = rounded(result);

    resultLog.innerHTML = resultLog.innerHTML + `<p>${input} = ${oldResult}</p>`;
}

btnResult.addEventListener('click', getResult);

document.addEventListener('keydown', pressKey);

function pressKey() {
    let value = event.key;
    let comparison = /['Alt', 'Control', 'Tab', 'a-zA-Zа-яА-Я']/;

    if (value == 'Enter') {
        event.preventDefault();
        return getResult();
    }

    if (value == 'Escape') {
        return clear();
    }

    if (value == 'Backspace') {
        let lastChar = userInput.value.charAt(userInput.value.length - 1);
        if (lastChar == ' ') {
            return userInput.value = userInput.value.substring(0, userInput.value.length - 3)
        }
        return userInput.value = userInput.value.substring(0, userInput.value.length - 1)
    }

    switch (value) {
        case "+": return functionPlus();
        case "-": return functionMinus();
        case "*": return functionMultiply();
        case "/": return functionDivision();
    }

    if (comparison.test(value)) {
        return false;
    } else {
        if (oldResult == userInput.value) {
            userInput.value = '';
        }
        userInput.value = userInput.value + value;
    }
}

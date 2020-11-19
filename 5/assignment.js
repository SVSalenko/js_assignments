function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// Task №1
const sayHi = name => console.log('Hi ' + name);

sayHi();

// Task №2
const sayArgHi = (arg, name) => console.log(arg + ' ' + name);
const sayBodyHi = () => console.log('Hi ' + 'Valentin');
const returnHi = name => 'Hi ' + name;
// sayArgHi('Hi', 'Sergey');
// sayBodyHi();
// console.log(returnHi('Alexsandr'));

// Task №3
const sayArgHiDefault = (arg = 'Hi', name = 'Incognito') => console.log(arg + ' ' + name);
const returnHiDefault = (name = 'Incognito') => 'Hi ' + name;
// sayArgHiDefault()
// console.log(returnHiDefault())

// Task №4
function checkInput(callback, ...arguments) {
    let check = [];

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== '') {
            check.push(true);
        }
    }

    if (arguments.length === check.length) {
        callback();
    }
}

function message() {
  alert('Ни одна из переданных строк не пустая.');
}
// checkInput(message, 'qwe', 'asd', 'zxc');
// checkInput(message, 'qwe', 'asd', '', 'zxc');

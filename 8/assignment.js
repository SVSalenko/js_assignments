// Task №1 Создай массив из чисел
const array = [23, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// отфильтруй все числа больше 5
console.log(array.filter(number => number > 5));

// map каждое число на объект, который будет содержать это число в каком-нибудь из своих свойств
const object = {num: 7}
console.log(array.map(number => number * object.num));

// reduce весь массив до одного числа (перемножь все числа массива)
console.log(array.reduce((next, current) => next * current));

// Task №2 Создай функцию findMax, которая ищет максимальное число среди всех в массиве.
const findMax = array => {
    let maxNumber = array[0];
    array.map(number => number > maxNumber ? maxNumber = number : maxNumber);
    return maxNumber;
}
console.log(findMax(array));

// Task №3 Измени функцию findMax, чтобы она находила и максимальный, и минимальный элементы и возвращала результат в виде массива.
// При вызове этой функции, назначь результат в две разные переменные, испльзуя деструктирующее присваивание.
const findMinAndMax = array => {
    let minNumber = maxNumber = array[0];
    array.map(number => number > maxNumber ? maxNumber = number : maxNumber);
    array.map(number => number < minNumber ? minNumber = number : minNumber);
    return [minNumber, maxNumber];
}
let [min, max] = findMinAndMax(array);
console.log(min, max);

// Task №4 Создай список чего-нибудь (и, возможно, напрограммируй логику),
// так, чтобы 100% никогда не было повторяющихся значений в этом списке. Выбери любой подход для решения этой задачи.
const list = new Set();
list.add('apple');
list.add('banana');
list.add('apple');
console.log(list);

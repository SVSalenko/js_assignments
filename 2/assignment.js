const task3Element = document.getElementById('task-3');

function sayHello() {
    alert('Hello')
}

function sayName(name) {
    alert(name)
}

sayHello();
sayName('Sergey');


task3Element.addEventListener('click', sayHello);

function productInfo(product, supplier, country) {
    return product + ' - ' + supplier + ' - ' + country;
}

let productLine = productInfo('Iphone', 'Auto', 'China');
alert(productLine);

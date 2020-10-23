function alertHi() {
    alert('Hi');
}

const defaultHP = 100;
let log = [];
let maxLife = prompt('Введите колличество HP');

if (maxLife <= 0 || isNaN(maxLife)) {
    maxLife = defaultHP;
}

adjustHealthBars(maxLife);


attackBtn.addEventListener('click', attack);

let monsterHP = monsterHealthBar.value;
let playerHP = playerHealthBar.value;
console.log(monsterHP, playerHP);
function attack() {
    applyMonsterDamage(10);
    applyPlayerDamage(10);
    console.log(monsterHP, playerHP);
}

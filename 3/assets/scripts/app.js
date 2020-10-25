const defaultHP = 100;
let log = [];
let maxLife = prompt('Введите колличество HP');
let bonusLife = true;
let damage = 10;
let strongDamage = 20;
let smallHeal = 10;


if (maxLife <= 0 || isNaN(maxLife)) {
    maxLife = defaultHP;
}

adjustHealthBars(maxLife);

let monsterHP = monsterHealthBar.value;
let playerHP = playerHealthBar.value;

log.push([`Начало новой игры: Здоровье монстра - ${monsterHP}, Ваше Здоровье - ${playerHP}`]);

attackBtn.addEventListener('click', attack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healPlayerl);
logBtn.addEventListener('click', logGame);

function attack() {
    let applyMonsterDamageHP = applyMonsterDamage(damage);
    let applyPlayerDamageHP = applyPlayerDamage(damage);
    monsterHP -= applyMonsterDamageHP;
    playerHP -=applyPlayerDamageHP;

    log.push([`Атака: Здоровье монстра - ${monsterHP}(урон - ${applyMonsterDamageHP}), Ваше Здоровье - ${playerHP}(урон - ${applyPlayerDamageHP})`]);

    gameEndCheck();
}

function strongAttack() {
    let applyMonsterDamageHP = applyMonsterDamage(strongDamage);
    let applyPlayerDamageHP = applyPlayerDamage(damage);
    monsterHP -= applyMonsterDamageHP;
    playerHP -=applyPlayerDamageHP;

    log.push([`Сильная атака: Здоровье монстра - ${monsterHP}(урон - ${applyMonsterDamageHP}), Ваше Здоровье - ${playerHP}(урон - ${applyPlayerDamageHP})`]);

    gameEndCheck();
}

function healPlayerl() {
    let applyPlayerDamageHP = applyPlayerDamage(strongDamage);
    let increasePlayerHealthHP = increasePlayerHealth(strongDamage);
    playerHP -= applyPlayerDamageHP;
    playerHP += increasePlayerHealthHP;

    if (playerHP >= maxLife) {
        playerHP = maxLife;
    }

    log.push([`Лечение: Здоровье монстра - ${monsterHP}(урон - ${0}), Ваше Здоровье - ${playerHP}(урон - ${applyPlayerDamageHP}, лечение - ${increasePlayerHealthHP})`]);

    gameEndCheck();
}

function logGame() {
    console.log(log);
}

function gameEndCheck() {
    if (playerHP <= 0 && bonusLife) {
        bonusLife = false;
        removeBonusLife();
        setPlayerHealth(maxLife);
        playerHP = playerHealthBar.value;
        alert('you almost lost, but the bonus life saved you');
        log.push([`Потрачена дополнительная жизнь: Здоровье монстра - ${monsterHP}, Ваше Здоровье - ${playerHP}`]);
        if (monsterHP <= 0) {
            alert('victory');
            log.push([`Вы выиграли`]);
            resetGame(maxLife);
        }
    } else if (monsterHP <= 0 && playerHP <= 0) {
        alert('draw');
        resetGame(maxLife);
        log.push([`Ничья`]);
    } else if (monsterHP <= 0) {
        alert('victory');
        log.push([`Вы выиграли`]);
        resetGame(maxLife);
    } else if (playerHP <= 0) {
        alert('defeat');
        log.push([`Вы проиграли`]);
        resetGame(maxLife);
    }
}

function resetGame(value) {
    monsterHP = monsterHealthBar.value;
    playerHP = playerHealthBar.value;

    maxLife = prompt('Введите колличество HP');
    bonusLife = true;

    if (maxLife <= 0 || isNaN(maxLife)) {
        maxLife = defaultHP;
    }

    adjustHealthBars(maxLife);

    monsterHP = monsterHealthBar.value;
    playerHP = playerHealthBar.value;

    addBonusLife();

    log.push([`Начало новой игры: Здоровье монстра - ${monsterHP}, Ваше Здоровье - ${playerHP}`]);
}

function increasePlayerHealth(healValue) {
    playerHealthBar.value = +playerHealthBar.value + healValue;
    return healValue;
}

function removeBonusLife() {
  bonusLifeEl.hidden = true;
}

function addBonusLife() {
  bonusLifeEl.hidden = false;
}

function applyMonsterDamage(damage) {
  const appliedDamage = parseInt(Math.random() * damage);
  monsterHealthBar.value = +monsterHealthBar.value - appliedDamage;
  return appliedDamage;
}

function applyPlayerDamage(damage) {
  const appliedDamage = parseInt(Math.random() * damage);
  playerHealthBar.value = +playerHealthBar.value - appliedDamage;
  return appliedDamage;
}

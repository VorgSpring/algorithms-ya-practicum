/**
 * Владелец казино хочет поставить себе новый игровой автомат: когда дёргаешь за ручку, в автомате генерируются три случайных числа.
 * Если все три числа одной чётности, то игрок выигрывает.
 * Напишите программу, которая по трём числам определяет, выиграл игрок или нет. 
 * 
 * Формат ввода
 * В первой строке записаны три целых числа a, b и c, выданных автоматом. Числа не превосходят 10^9 по модулю. 
 * 
 * Формат вывода
 * Выведите «WIN», если игрок выиграл, и «FAIL» в противном случае.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkEven = (number) => {
  return number % 2 === 0;
}

const isSimilar = (array) => {
  const isEven = checkEven(array[0]);

  for(let i = 1; i < array.length; i++) {
    if (checkEven(array[i]) !== isEven) {
      return false;
    }
  }

  return true;
}

const checkResult = (array) => {
  return isSimilar(array) ? 'WIN' : 'FAIL';
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  const array = value.split(' ').map(
    item => parseInt(item, 10)
  );

  const result = checkResult(array);
  console.log(result);

  rl.close();
});

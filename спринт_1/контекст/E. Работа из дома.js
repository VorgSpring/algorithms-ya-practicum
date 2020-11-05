/**
 * Алла осталась работать из дома.
 * Во время её рабочего видеозвонка с Тимофеем и Гошей подошёл Вася.
 * Он решил показать им написанный им недавно код функции, переводящей целое число из десятичной системы в двоичную.
 * Ему было интересно, смогут ли ребята написать более короткую, или более эффективную программу.
 * Тимофей, Алла и Гоша с радостью отвлеклись от работы, чтобы попробовать.
 * А у вас получится обойти Васю?
 * 
 * Формат ввода
 * На вход подается целое число в диапазоне от 0 до 10000.
 * 
 * Формат вывода
 * Выведите двоичное представление этого числа.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const convertToBinary = (number) => {
  let result = [];

  do {
    result.push(number % 2);
    number = Math.floor(number / 2);
  } while (number > 0);

  return result.reverse().join('');
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  const number = parseInt(value, 10);

  const result = convertToBinary(number);

  console.log(result);
  rl.close();
});

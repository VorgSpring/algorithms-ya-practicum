/**
 * Вася на уроке математики проходил степени.
 * Он хочет написать программу, которая определяет, будет ли положительное целое число степенью четверки. 
 * 
 * Формат ввода
 * На вход подается целое число в диапазоне от 1 до 10000.
 * 
 * Формат вывода
 * True, если число является степенью четырех, False - в обратном случае.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isDegreeOfFour = (value) => {
  const log = Math.log(value)/Math.log(4);

  return (log ^ 0) === log ? 'True' : 'False';
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  const preparedValue = parseInt(value, 10);

  const result = isDegreeOfFour(preparedValue);

  console.log(result);
  rl.close();
});

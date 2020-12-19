/**
 * Гоша решил убрать из статистики дни, когда ничего в «‎Черепашеньке» не заработал и не проиграл.
 * Дан список заработанных очков. Нужно удалить из него нули.
 * Дополнительную память больше O(1) использовать нельзя. 
 * 
 * Формат ввода
 * В первой строке - одно число n. Во второй - n целых чисел через пробел.
 * 
 * Формат вывода
 * Напечатайте очки за все дни, где выигрыш был отличен от нуля.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthArray = null;

const deleteZero = array => array.filter(item => item !== 0).join(' ');

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  if (!lengthArray) {
    lengthArray = parseInt(value, 10);
  } else {
    const array = value.split(' ').map(
      item => parseInt(item, 10)
    );

    const result = deleteZero(array);

    console.log(result);
    rl.close();
  }
});

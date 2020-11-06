/**
 * Алла писала код, добавляющий запись в новую таблицу базы данных.
 * И вдруг получила ошибку duplicate foreign key constraint.
 * В тот же момент её отвлекла Рита.
 * Алла случайно закрыла окно терминала с информацией о том, какое именно значение стало причиной ошибки.
 * Зато у неё сохранился список id, использованных при запросе.
 * Помогите ей выяснить, какой id стал причиной ошибки.
 * Дан массив чисел, состоящий  из n целых чисел. Одно число встречается более одного раза.
 * Нужно определить это число.
 * 
 * Формат ввода
 * В первой строке записано число n, которое не превосходит 1000.
 * В следующей строке через пробел записаны n целых чисел, каждое из которых также не превосходит 10000. 
 * 
 * Формат вывода
 * Выведите одно число.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthArray = null;

const findDuplicate = (array) => {
  if (array.length === 0) {
    return '';
  }

  const map = {};

  array.forEach(item => {
    if (map[item]) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  });

  return Object.keys(map)
    .filter(item => map[item] > 1)
    .join(' ');
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  if (!lengthArray) {
    lengthArray = parseInt(value, 10);
  } else {
    const array = value.split(' ').map(
      item => parseInt(item, 10)
    );

    const result = findDuplicate(array);

    console.log(result);
    rl.close();
  }
});

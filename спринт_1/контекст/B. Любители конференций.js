/**
 * На IT-конференции присутствовали студенты из разных вузов со всей страны.
 * Список студентов представлен в таблице. В колонке «‎Вуз» записаны числа — id учебного заведения.
 * Тимофей предложил Саше выяснить, из каких вузов на конференцию пришло больше всего учащихся.
 * Ребята решили выяснить, из каких k вузов присутствует больше всего гостей
 * 
 * Формат ввода
 * В первой строке записан список id вузов длиной не больше 10100.
 * Каждое из чисел находится в диапазоне от 0 до 10000.
 * Во второй строке записано одно число - параметр k.
 * 
 * Формат вывода
 * Выведите k чисел (id вуза) через пробел, отсортированные по убыванию, начиная от максимального количества гостей от вуза на конференции.
 * 
 * Примечания
 * В тестовых данных нет кейсов, когда вузы с одинаковым количеством студентов находятся на границе k.
 * Например, дан массив 1 1 2 2 и k = 1.
 * Если более одного вуза имеет одно и то же количество учащихся, и они входят в топ k, то выводить их id нужно в порядке возрастания. 
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('');
rl.prompt();

let ids = null;

const findMaxCountNumber = (numbers, count) => {
  const map = {};

  numbers.forEach(number => {
    if (map[number]) {
      map[number] = map[number] + 1;
    } else {
      map[number] = 1;
    }
  });

  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .splice(0, count)
    .join(' ');
}

rl.on('line', (value) => {
  if (!ids) {
    ids = value.split(' ').map(
      id => parseInt(id, 10)
    );
  } else {
    const count = parseInt(value, 10);
    const result = findMaxCountNumber(ids, count);

    console.log(result);
    rl.close();
  }
});

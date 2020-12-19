/**
 * Чтобы подготовиться к семинару, Гоше надо прочитать статью по эффективному менеджменту.
 * Так как Гоша хочет спланировать день заранее, то ему надо оценить время на прочтение статьи.
 * Метод для оценки временных затрат достаточно прост: берётся случайное предложение из текста, и в нём ищется самое длинное слово.
 * Его длина и будет условной сложностью статьи. Так как Гоша в будущем станет великим управленцем, то уже сейчас поручает это задание вам. 
 * 
 * Формат ввода
 * В первой строке дана длина строки L (L ≤ 10^5).
 * Во второй строке записана сама строка, состоящая из маленьких латинских букв и пробелов.
 * Слово —- последовательность букв, не разделённых пробелами. Пробелы могут стоять в самом начале строки и в самом её конце.
 * 
 * Формат вывода
 * В первой строке выведите самое длинное слово.
 * Во второй строке выведите его длину.
 * Если подходящих слов несколько, то выведите то, которое встречается раньше.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lengthSentence = null;

const findLongestWord = (value) => {
  const wordArray = value.split(' ');

  let longestWord = '';

  wordArray.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  if (!lengthSentence) {
    lengthSentence = parseInt(value, 10);
  } else {
    const word = findLongestWord(value);

    console.log(word);
    console.log(word.length);
    rl.close();
  }
});

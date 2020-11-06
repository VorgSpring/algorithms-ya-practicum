/**
 * Вася вернулся домой под вечер и вспомнил, что ещё не сделал домашнее задание по русскому языку.
 * Чтобы понять разницу между анаграммой и палиндромом, Вася снова обратился к Алле.
 * Она объяснила брату, что два слова — анаграммы, если одно можно получить из другого перестановкой букв.
 * А палиндром — это слово или фраза, которая читается одинаково, если читать слева направо и справа налево.
 * Теперь Васе интересно: как закодить функцию, определяющую, анаграммы слова или нет.
 * Помогите ему. 
 * 
 * Формат ввода
 * Два слова - каждое на отдельной строке.
 * Слова состоят из строчных букв латинского и русского алфавитов. 
 * 
 * Формат вывода
 * Слово True, если слова являются анаграммами друг друга, слово False - если не являются.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let firstWord = null;

const getMap = (word) => {
  const map = {};

  for(let i = 0; i < word.length; i++) {
    const item = word[i];

    if (map[item]) {
      map[item] = map[item] + 1;
    } else {
      map[item] = 1;
    }
  }

  return map;
}

const isAnagram = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) {
    return 'False';
  }

  const [firstMap, secondMap] = [firstWord, secondWord].map(getMap);

  for(item in firstMap) {
    if (firstMap[item] !== secondMap[item]) {
      return 'False'
    }
  }

  return 'True';
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  if (!firstWord) {
    firstWord = value;
  } else {
    const secondWord = value;

    const result = isAnagram(firstWord, secondWord);

    console.log(result);
    rl.close();
  }
});

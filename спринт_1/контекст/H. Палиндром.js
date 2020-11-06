/**
 * А теперь помогите Васе понять, будет ли фраза палиндромом‎.
 * Учитываются только буквы и цифры, заглавные и строчные буквы считаются одинаковыми.
 * 
 * Формат ввода
 * В единственной строке записана фраза или слово.
 * Буквы могут быть только латинские
 * 
 * Формат вывода
 * Выведите True, если фраза является палиндромом и False, если не является.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isPalindrome = (value) => {
  const preparedValue = value.replace(/[^a-zа-яё\d]/gi, '').toLowerCase();

  const length = preparedValue.length;
  if (!length) {
    return 'False';
  }

  for (let i = 0; i < length; i++) {
    if (preparedValue[i] !== preparedValue[length - i - 1]) {
      return 'False';
    }
  }

  return 'True';
}

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
  const result = isPalindrome(value);

  console.log(result);
  rl.close();
});

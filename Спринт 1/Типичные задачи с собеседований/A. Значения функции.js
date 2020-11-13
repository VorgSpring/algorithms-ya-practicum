/**
 * Младший брат Аллы Вася делает тест по математике: вычисляет значение функций в различных точках.
 * Стоит отличная погода, и друзья зовут Васю гулять.
 * Но мама разрешила мальчику пойти на улицу только после того, как он закончит тест.
 * К сожалению, Вася пока не умеет программировать. Зато Алла умеет.
 * Она решила помочь брату и написала код функции y = ax2 + bx + c. И вы напишите.
 * 
 * Формат ввода
 * На вход через пробел подаются числа a, x, b, c.
 * 
 * Формат вывода
 * Выведите одно число - значение функции в точке x.
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('');
rl.prompt();

rl.on('line', (value) => {
    const [a, x, b, c] = value.split(' ').map(
        item => parseInt(item, 10)
    );

    const result = a * x * x + b * x + c;
    console.log(result);

    rl.close();
});

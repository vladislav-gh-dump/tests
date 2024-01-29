import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

// console.log('Все тесты пройдены!');

// assert(capitalize('') === '');
// assert(capitalize('hello') === 'Hello');

// assert.equal(capitalize(''), '');
// assert.equal(capitalize('hello'), 'Hello');

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');

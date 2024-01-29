// import assert from 'power-assert';
import { user } from '../src/user.js';

// assert(user.name === 'Michel');

test('user.name', () => {
  expect(user.name).toEqual('Madonna');
});

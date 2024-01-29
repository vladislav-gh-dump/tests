// import assert from 'power-assert';
import { users } from '../src/users.js';

test('users.length', () => {
  expect(users).toHaveLength(3);
});

test('user.name', () => {
  expect(users[0].name).toEqual('Kate');
});

test('user.hasFriends', () => {
  expect(users[1].hasFriends).toBeTruthy();
});

test('user.email', () => {
  expect(users[1].email).toBeNull();
});

// import assert from 'power-assert';
import { users } from '../src/users.js';

test('users.length', () => {
  expect(users).toHaveLength(3);
  expect(users).not.toHaveLength(2);
});

test('user.name', () => {
  expect(users[0].name).toEqual('Kate');
  expect(users[1].name).not.toEqual('Name');
});

test('user.hasFriends', () => {
  expect(users[1].hasFriends).toBeTruthy();
  expect(users[2].hasFriends).not.toBeTruthy();
  expect(users[2].hasFriends).toBeFalsy();
});

test('user.email', () => {
  expect(users[1].email).toBeNull();
  expect(users[2].email).not.toBeNull();
});

test('users property', () => {
  expect(users[0]).toHaveProperty('name', 'Kate');
});

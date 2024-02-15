import { stackInit, isStackEmpty } from '../src/stack.js';

test('stack push', () => {
    const stack = stackInit();

    stack.push('one');
    stack.push('two');
    expect(stack.pop()).toEqual('two');
    expect(stack.pop()).toEqual('one');
});

test('stack isEmpty', () => {
    const stack = stackInit();
    expect(isStackEmpty(stack)).toBeTruthy();
    
    stack.push('one');
    expect(isStackEmpty(stack)).toBeFalsy();

    stack.pop();
    expect(isStackEmpty(stack)).toBeTruthy();
});

test('stack pop', () => {
    const stack = stackInit();
    expect(() => stack.pop()).toThrow();
});

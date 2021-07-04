const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Test if returns object', () => {
    const Bob = new Employee();
    expect(typeof(Bob)).toBe('object');
});

test('Test if returns Employee name', () => {
    const name = 'Bob'
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test('Test if returns id', () => {
    const id = 5
    const e = new Employee('Bob', id)
    expect(e.id).toBe(id)
});

test('Test if returns email', () => {
    const email = '1@email.com'
    const e = new Employee('Bob', 5, email)
    expect(e.email).toBe(email)
});

test('Test getName method', () => {
    const name = 'Bob'
    const e = new Employee(name)
    expect(e.getName()).toBe(name)
});
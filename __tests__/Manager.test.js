const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('Test returns officeNumber', () => {
    const officeNumber = 123;
    const m = new Manager('Bob', 5, '1@email.com', officeNumber)
    expect(m.officeNumber).toBe(officeNumber)
});
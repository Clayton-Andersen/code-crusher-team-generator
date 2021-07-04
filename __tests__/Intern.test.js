const Intern = require('../lib/Intern.js');

test('Test returns school', () => {
    const school = 'UofU';
    const m = new Intern('Bob', 5, '1@email.com', 'UofU')
    expect(m.school).toBe(school)
});
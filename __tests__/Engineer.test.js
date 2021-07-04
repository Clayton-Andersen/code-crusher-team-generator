const Engineer = require('../lib/Engineer.js');

test('Test returns github', () => {
    const github = 'mygithub.com';
    const m = new Engineer('Bob', 5, '1@email.com', 'mygithub.com')
    expect(m.github).toBe(github)
});
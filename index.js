const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inputs = []

const firstPrompts = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the managers id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?'
    }
])
.then( (response) => {
    const manager = new Manager(response.managerName, response.id, response.email, response.officeNumber)
    inputs.push(manager)
    additionalEmployees();
})
}
const additionalEmployees = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "Which type of employee would you like to add?",
        choices: ['Engineer', 'Intern', 'None']
    }])
    .then( (response) => {
        if (response.employeeType==='Engineer'){
            engineerPrompts();
        } else if (response.employeeType==='Intern') {
            internPrompts();
        } else {
            console.log(inputs)
        }
    })
}

const engineerPrompts = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the Engineers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Engineers id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Engineers email?'
    },
    {
        type: 'input', 
        name: 'github',
        message: 'What is the Engineers GitHub?'
    }
])
.then( (response) => {
    const engineer = new Engineer(response.name, response.id, response.email, response.github)
    inputs.push(engineer)
    additionalEmployees();
});
}

const internPrompts = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the Interns name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the Interns id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the Interns email?'
    },
    {
        type: 'input', 
        name: 'school',
        message: 'What is the Interns school?'
    }
])
.then( (response) => {
    const intern = new Intern(response.name, response.id, response.email, response.school)
    inputs.push(intern)
    additionalEmployees();
});
}
firstPrompts();
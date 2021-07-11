const html = (data) => {
    const internArray = data.filter(employee => employee.getRole() === 'Intern')
    const engineerArray = data.filter(employee => employee.getRole() === 'Engineer')
    const genEmployee = (employee) => {
        let schoolCheck = "school" in employee;
        const option = schoolCheck === true ? employee.school: employee.github

        return `<div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${employee.getRole()}</h5>
                <p class="card-text">${employee.name}</p>
                <p class="card-text">${employee.id}</p>
                <p class="card-text">${employee.email}</p>
                <p class="card-text">${option}</p>
            </div>
        </div>
    </div>`
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${data[0].getRole()}</h5>
                    <p class="card-text">${data[0].name}</p>
                    <p class="card-text">${data[0].id}</p>
                    <p class="card-text">${data[0].email}</p>
                    <p class="card-text">${data[0].officeNumber}</p>
                </div>
            </div>
        </div>
        ${internArray.map(intern => {
        return genEmployee(intern)
    }).join("")}
        ${engineerArray.map(engineer => {
        return genEmployee(engineer)
    }).join("")}
    </body>
    </html>`
};
module.exports = html


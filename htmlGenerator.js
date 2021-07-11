const html = (data) => {
    const internArray = data.filter(employee => employee.getRole() === 'Intern')
    const engineerArray = data.filter(employee => employee.getRole() === 'Engineer')
    console.log(internArray);
    console.log(engineerArray);
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <p> ${ data[0].name }
        </p>
        <p> ${ data[0].id }
        </p>
        <p> ${ data[0].email }
        </p>
        <p> ${ data[0].officeNumber }
        </p>
        <p> ${ data[0].getRole() }
        </p>
            ${ internArray.map(intern => {
                return `<p> ${ intern.name }
                </p>
                <p> ${ intern.id }
                </p>
                <p> ${ intern.email }
                </p>
                <p> ${ intern.school }
                </p>
                <p> ${ intern.getRole() }
                </p>`
            }) }
            ${ engineerArray.map(engineer => {
               return  `<p> ${ engineer.name }
                </p>
                <p> ${ engineer.id }
                </p>
                <p> ${ engineer.email }
                </p>
                <p> ${ engineer.github }
                </p>
                <p> ${ engineer.getRole() }
                </p>`
            }) }
    </body>
    </html>`
};
module.exports = html 

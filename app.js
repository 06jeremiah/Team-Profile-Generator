const Manager = require("./Develop/lib/manager");
const Engineer = require("./Develop/lib/engineer");
const Inter = require("./Develop/lib/intern");
const Employee = require("./Develop/lib/employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const allEmployee = []

const prompt = () => {
    inquirer
        .prompt([{
            name: "name",
            type: "input",
            message: "What is your name?"
        }, {

            name: "id",
            type: "input",
            message: "What is your ID?"
        }, {
            name: "email",
            type: "input",
            message: "What is your e-mail?"
        }, {
            name: "role",
            type: "list",
            message: "What role?",
            choices: ["Manager", "Engineer", "Intern"]
        }

        ])
        .then(answers => {
            let role = answers.role
            if (role === "Engineer") {
                inquirer.prompt([{
                    name: "github",
                    type: "input",
                    message: "What is your github?"
                }]).then(answer => {
                    let newEng = new Engineer(answers.name, answers.id, answers.email, answer.github)
                    allEmployees.push(newEng)
                    addMember()
                })
                    .catch(error => {
                        console.log(error)
                    });
            } else if (role === "Manager") {
                inquirer.prompt([{
                    name: "officeNumber",
                    type: "input",
                    message: "What is your office number?"
                }]).then(answer => {
                    let newMana = new Manager(answers.name, answers.id, answers.email, answer.officeNumber)
                    allEmployees.push(newMana)
                    addMember()
                })
                    .catch(error => {
                        console.log(error)
                    });
            } else if (role === "Intern") {
                inquirer.prompt([{
                    name: "school",
                    type: "input",
                    message: "What school do you attend?"
                }]).then(answer => {
                    let newStu = new Intern(answers.name, answers.id, answers.email, answer.school)
                    allEmployees.push(newStu)
                    addMember()
                })
                    .catch(error => {
                        console.log(error)
                    });
            }
        })
        .catch(error => {
            console.log(error)
        });
}
const generate = () => {
    const html = render(allEmployees)
    fs.writeFile("./output/team.html", html, "utf-8", (data, error) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data)
        }
    })
}

const addMember = () => {
    inquirer.prompt([{
        name: "addEmployee",
        type: "confirm",
        message: "Do you want to add another employee?"
    }]).then(answers => {
        if(answers.addEmployee){
            prompt()
        }else{
            generate()
        }
    }).catch(error => {
        console.log(error)
    });

}

prompt()
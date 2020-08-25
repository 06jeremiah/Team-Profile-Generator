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
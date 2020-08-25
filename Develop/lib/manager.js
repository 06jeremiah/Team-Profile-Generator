// Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Manager extends Employee {
    constructor(name,id,email, officeNum){
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNum
      
    }

    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getOfficeNumber(){
        return this.officeNum
    }
    getRole() {
        return "Manager"
    }

}
module.exports = Manager;
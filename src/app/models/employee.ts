export class Employee {
    file: number;
    name: string;
    lastname: string;
    gender: string;
    salary: number;

    constructor(file: number, name: string, lastname: string, gender: string, salary: number) {
        this.file = file;
        this.name = name;
        this.lastname = lastname;
        this.gender = gender;
        this.salary = salary;
    }
}
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  listEmployee: Employee[] = [
    {file: 1, name: 'Mark', lastname: 'Richardson', gender: 'Male', salary: 25001},
    {file: 2, name: 'James', lastname: 'Prince', gender: 'Male', salary: 35001},
    {file: 3, name: 'Martha', lastname: 'Hamilton', gender: 'Female', salary: 45001},
    {file: 4, name: 'Sara', lastname: 'Springs', gender: 'Female', salary: 55001},
    {file: 5, name: 'David', lastname: 'Lopez', gender: 'Male', salary: 65001},
    {file: 6, name: 'Richard', lastname: 'Rowlings', gender: 'Male', salary: 15001},
    {file: 7, name: 'Antony', lastname: 'Bridges', gender: 'Male', salary: 35001},
    {file: 8, name: 'kathya', lastname: 'James', gender: 'Female', salary: 45001},
    {file: 9, name: 'Sandra', lastname: 'Drulok', gender: 'Female', salary: 98891},
    {file: 10, name: 'Jhoan', lastname: 'Smugh', gender: 'Male', salary: 75000},
  ]

  radioButtonSelected = 'All';
  constructor() { }

  ngOnInit(): void {
  }

  getTotalEmployees(): number {
    return this.listEmployee.length;
  }

  getTotalMale(): number {
    return this.listEmployee.filter(list => list.gender === 'Male').length;
  }

  getTotalFemale(): number {
    return this.listEmployee.filter(list => list.gender === 'Female').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void {
    this.radioButtonSelected = radioButtonSelec;
  }
  
}

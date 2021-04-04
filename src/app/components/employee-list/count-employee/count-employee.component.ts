import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-count-employee',
  templateUrl: './count-employee.component.html',
  styleUrls: ['./count-employee.component.css']
})
export class CountEmployeeComponent implements OnInit {
  @Input() all: number;
  @Input() male: number;
  @Input() female: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSelected = 'All';

  constructor() { 
    this.all = 0;
    this.male = 0;
    this.female = 0;
  }

  ngOnInit(): void {
    console.log(this.all);
    
  }

  radioChange(): void {
    this.countRadioButtonChange.emit(this.radioButtonSelected);
  }

 

}

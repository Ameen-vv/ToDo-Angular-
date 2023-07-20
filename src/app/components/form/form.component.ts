import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() title: string = '' ;
  @Input() placeholder: string = '' ;
  ToDoTask: string = '' ;
  @Output() formSubmit = new EventEmitter<string>() ;
  onSubmit() {
    if (this.ToDoTask) {
      this.formSubmit.emit(this.ToDoTask) ;
      this.ToDoTask = '' ;
    }else{
      alert('enter a task') ;
    };

  };
};

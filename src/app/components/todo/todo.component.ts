import { Component, OnInit } from '@angular/core';
import { TODO } from 'src/app/models/ToDoModel';
import { NgForm } from '@angular/forms'
import { ToDoService } from 'src/app/services/to-do.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: TODO[] = [] ;
  ToDo:string = 'ToDo' ;
  placeHolder:string = 'add your todo' ;

  constructor(private todoService : ToDoService){} ;

  ngOnInit(): void {
      this.todos = this.todoService.getToDo() ;    
  };

  doneTodo(i : number){
    this.todoService.doneTodo(i) ;
  };

  removeTodo(i : number){
    this.todoService.removeTodo(i) ;
  };

  addToDo(task:string){
    this.todoService.addTodo(task) ;
  };

};

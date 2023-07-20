import { Injectable } from '@angular/core';
import { TODO } from '../models/ToDoModel';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos: TODO[] = [] ;
  constructor() {
    const storedTodos:string | null  = localStorage.getItem('todo') ;
    this.todos = storedTodos ? JSON.parse(storedTodos) : [] ;
  };

  addTodo(ToDo:string): void {
    this.todos.push({
      task: ToDo,
      done: false
    });
    this.saveToLocalStorage() ;
  };

  removeTodo(i : number):void{
    if(window.confirm('Are you sure ?')){
      this.todos.splice(i,1);
      this.saveToLocalStorage();
    }
  };

  doneTodo(i : number):void{
    this.todos[i].done = true;
    this.saveToLocalStorage();
  };

  saveToLocalStorage():void{
    localStorage.setItem('todo', JSON.stringify(this.todos));
  };

  getToDo():TODO[]|[]{
    return this.todos ;
  };
};

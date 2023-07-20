import { Component, OnInit } from '@angular/core';
import { TODO } from 'src/app/models';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: TODO[] = []

  inputTodo : string = ''

  ngOnInit(): void {
    const storedTodos:string | null  = localStorage.getItem('todo') 
    this.todos = storedTodos ? JSON.parse(storedTodos) : []
  }

  addTodo(): void {
    this.todos.push({
      task: this.inputTodo,
      done: false
    })
    localStorage.setItem('todo', JSON.stringify(this.todos))
    this.inputTodo = ''
  }

  removeTodo(i : number):void{
    this.todos.splice(i,1)
    localStorage.setItem('todo', JSON.stringify(this.todos)) 
  }

  doneTodo(i : number):void{
    this.todos[i].done = true
    localStorage.setItem('todo', JSON.stringify(this.todos))
  }


}

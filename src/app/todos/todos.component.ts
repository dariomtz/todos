import { Component, OnInit } from '@angular/core';

interface Todo {
  userId: number,
  id: number, 
  title: string,
  completed: boolean,
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList: Array<Todo> = [
  ];

  private url = "https://jsonplaceholder.typicode.com/todos";

  constructor() { }

  ngOnInit(): void {
  }

  async addTodo(){
    let response = await fetch(`${this.url}/${this.todoList.length + 1} `);
    let json: Todo = await response.json();
    this.todoList.push(json);
  }

}

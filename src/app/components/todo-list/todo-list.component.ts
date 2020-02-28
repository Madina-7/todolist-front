import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: object[] 
  new_item: string='';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
    {
      'title':'Learn what is angular, node',
      'completed': false,
    },    
    {
      'title':'How to use angular',
      'completed': false,
    },
    {
      'title':'Create server in node, app in angular',
      'completed': false,
    },
    {
      'title':'Create database and connect to server',
      'completed': false,
    }
    ]
  }

  addItem() {
    if(this.new_item){
      let newitem = {
        'title':this.new_item,
        'completed': false,
        'editing': false,
      }    
       this.todos.push(newitem)
    }
  }

  removeItem(i){
    this.todos.splice(i, 1);
  }
}
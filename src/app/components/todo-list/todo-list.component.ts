import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

//describe the class and after declare it 
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any 
  test: string[]
  new_item: string='';

  constructor(private http: HttpClient) {

    this.http.get('/api/task').subscribe(
        data => {
          console.log(data)
          this.todos = data;
        },
        error => {
          console.error('There was an error!', error)
        }
    )
   }


  ngOnInit(): void {}

  addItem() {
    if(this.new_item){

      let newitem = {
        'title': this.new_item,
        'completed': false,
        'id': 4674
      }    

        this.http.post('/api/task',newitem).subscribe(
          data => {
            console.log('toto');
            // retrieve updated list 
            this.http.get('/api/task').subscribe(
              data => {
                console.log(data)
                // send to html by replacing content of this.todos
                this.todos = data;
              },
              error => {
                console.error('There was an error!', error)
              }
            )
          },
          error => {
            console.error('There was an error!', error)
          }



        )


    }
  }

  removeItem(todo){
    // send id of task that needs to be deleted as query param
    let httpParams = new HttpParams().set('taskid', todo.id);
    let options = { params: httpParams };

    this.http.delete('/api/task',options).subscribe(
      data => {
        // retrieve updated list 
        this.http.get('/api/task').subscribe(
          data => {
            console.log(data)
            // send to html by replacing content of this.todos
            this.todos = data;
          },
          error => {
            console.error('There was an error!', error)
          }
        )
      },
      error => {
        console.error('There was an error!', error)
      }
    )

  }
}
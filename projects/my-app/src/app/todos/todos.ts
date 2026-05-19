import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  todos = httpResource<string[]>(() => '/api/todos');
}

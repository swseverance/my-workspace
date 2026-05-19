import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos {
  private http = inject(HttpClient);
  todos = toSignal(this.http.get<string[]>('/api/todos'), { initialValue: [] });
}

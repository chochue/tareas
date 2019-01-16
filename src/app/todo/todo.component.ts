import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAccion } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  seleccionado = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  toggleAll () {
    this.seleccionado = !this.seleccionado;
    const accion = new ToggleAllTodoAccion (this.seleccionado); 
    this.store.dispatch( accion );
  }

}

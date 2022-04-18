import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosCounterComponent } from './todos-counter/todos-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

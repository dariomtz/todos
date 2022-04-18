import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-counter',
  templateUrl: './todos-counter.component.html',
  styleUrls: ['./todos-counter.component.css']
})
export class TodosCounterComponent implements OnInit {
  @Input() count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

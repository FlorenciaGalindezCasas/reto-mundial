import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definicion',
  templateUrl: './definicion.component.html',
  styleUrls: ['./definicion.component.css']
})
export class DefinicionComponent implements OnInit {
  title: string = 'Definición'

  constructor() { }

  ngOnInit(): void {
  }

}

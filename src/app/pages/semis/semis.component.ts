import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semis',
  templateUrl: './semis.component.html',
  styleUrls: ['./semis.component.css']
})
export class SemisComponent implements OnInit {
  title: string = 'Semifinales'

  constructor() { }

  ngOnInit(): void {
  }

}

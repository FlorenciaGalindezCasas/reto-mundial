import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-definicion',
  templateUrl: './definicion.component.html',
  styleUrls: ['./definicion.component.css']
})
export class DefinicionComponent implements OnInit {
  estadisticas: any;
  title: string = 'Definición'

  constructor(private _servicios: ServiciosService) { }

  ngOnInit(): void {
    this.getEstadistica();
  }

  getEstadistica(){
    this._servicios.obtenerEstadisticas().subscribe((response)=>{
      console.log(response)
      this.estadisticas = response
    })
  }

 

}

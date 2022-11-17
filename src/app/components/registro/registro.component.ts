import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],

  })

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
  }

  onRegister():void{
    console.log(this.formularioRegistro.value)
    this.route.navigate(['/login'])
  }

}

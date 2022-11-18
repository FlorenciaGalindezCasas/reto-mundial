import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
    nationality: [''],
  });

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  registrarUser(){
    this.auth.registerUser('https://reto-mundial.herokuapp.com/user/signup', this.formularioRegistro.value)
    .subscribe({
      next: ((data)=>{
        console.log(data)
        this.route.navigate(['/login'])
      }),
      error: (error => console.error(error)),
      complete: (()=> console.info('Peticion hecha'))
    })
  }

 
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulariologin: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private route: Router, private auth: AuthService) {}

  ngOnInit(): void {}
  
  onLogin(){
    this.auth.loginUser('https://reto-mundial.herokuapp.com/user/signin', this.formulariologin.value)
    .subscribe({
      next: ((data)=>{
        console.log(data)
        this.route.navigate(['/home'])
      }),
      error: (error => console.log(error)),
      complete: (()=> console.log("Peticion terminada"))
    })
  }

}


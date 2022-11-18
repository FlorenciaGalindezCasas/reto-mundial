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
  
  onSubmit(){
   if(this.formulariologin.valid){
    this.auth.login(this.formulariologin.value)
    .then(respuesta => {
      console.log(respuesta)
      this.route.navigate(['/home'])
    })
    .catch(error => console.log(error))
   }
  }

}


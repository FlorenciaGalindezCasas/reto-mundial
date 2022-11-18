import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formularioRegistro: FormGroup = this.fb.group({
    name: ['', Validators.required],
    nacionality: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onRegister() {
    this.auth
      .register(this.formularioRegistro.value)
      .then((response) => {
        console.log(response);
        this.route.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}

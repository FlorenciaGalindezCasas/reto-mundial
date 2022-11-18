import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ServiciosService } from 'src/app/services/servicios.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router, private _services: ServiciosService,
    private _fb: FormBuilder) { }

  inputGoles: FormGroup = this._fb.group({
    qatar: '',
    senegal: '',
    paises_bajos: '',
    ecuador: '',
  })

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
    .then(()=>{
      this.route.navigate(['/login'])
    })
    .catch(error => console.log(error) )
  }

  votar(){
    this._services.postVotos(this.inputGoles.value).subscribe((response)=>{
      console.log(response)
    })
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private htttp: HttpClient  ) { }

   registerUser(url: string, body: any):Observable<any>{
    return this.htttp.post(url, body)

   }

   loginUser(url: string, body: any):Observable<any>{
    return this.htttp.post(url, body)
  }
  
   logout(){
    return signOut(this.auth)
   }

}

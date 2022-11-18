import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  handleCredentialResponse: any;
  ngZone: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    // window.onGoogleLibraryLoad = () => {
    //   console.log("Google's One-tap sign in script loaded!");

      // @ts-ignore
      // google.accounts.id.initialize({
        // Ref: https://developers.google.com/identity/gsi/web/reference/js-reference#IdConfiguration
        // client_id: 'XXXXXXXX',
      
      // OPTIONAL: In my case I want to redirect the user to an specific path.
      // @ts-ignore
  //     google.accounts.id.prompt((notification: PromptMomentNotification) => {
  //       console.log('Google prompt event triggered...');

  //       if (notification.getDismissedReason() === 'credential_returned') {
  //         this.ngZone.run(() => {
  //           this.router.navigate(['myapp/somewhere'], { replaceUrl: true });
  //           console.log('Welcome back!');
  //         });
  //       }
  //     });
  //   };
  }

}

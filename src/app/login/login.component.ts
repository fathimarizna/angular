import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router){}

  login(){
    this.router.navigateByUrl('/my-account');
  }

}

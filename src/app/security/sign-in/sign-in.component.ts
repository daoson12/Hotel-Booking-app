import { SessionService } from './../helper/session.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../helper/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router,
    private fb:FormBuilder,
    private authService:AuthService,
    private sessionService:SessionService) { }

  signInForm:any=FormGroup


  ngOnInit() {
    this.signInForm=this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })

  }

  login(){

    this.authService.loginIn(this.signInForm.value).subscribe(
      (res:any)=>{
      const token = res.headers?.get('Jwt-Token')
      this.sessionService.setUser(res.body);
      this.sessionService.setToken(token)
        console.log(res.body);
        this.router.navigate(['/home'])
      }
    )

  }

}

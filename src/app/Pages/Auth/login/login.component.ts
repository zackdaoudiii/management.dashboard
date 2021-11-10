import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  // // On Forgotpassword link click
  // onForgotpassword() {
  //   this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  // }
  //
  // // On Signup link click
  username :string;
  password : string;

  onLogin() {

    let data =  {
       'username' : this.username,
      'password ' : this.password
    }
    if(data){
      console.log(data);
    }
    this.router.navigate(['dashboard'], { relativeTo: this.route.parent });
  }

  ngOnInit(): void {
  }

}

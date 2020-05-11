import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  // hide = true;
  constructor(private _datalogin: LogindataService, private _routes: Router) {}

  ngOnInit() {
    this.loginform = new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }
  OnLogin() {
    console.log(this.loginform.value);
    this._datalogin.login(this.loginform.value).subscribe((data: user[]) => {
      if (data.length == 1) {
        alert("login successfully");
        localStorage.setItem("fname", data[0].fname);
        this._routes.navigate([""]);
      } else {
        alert("login Unsuccessfully");
      }
    });
  }

}

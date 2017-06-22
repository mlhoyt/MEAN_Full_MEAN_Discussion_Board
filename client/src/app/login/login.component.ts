import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name: string = "";
  currentUser: User;

  constructor(
    private _serverApi: ServerApiService,
  )
  {}

  ngOnInit() {
  }

  doSubmit() {
    this._serverApi.login( this.user_name )
      .then( data => {
        // Need CurrentUserDataService that is updated with the
        this.currentUser = data;
        // this.user_name = "logged_in as " + this.currentUser.name + " id: " + this.currentUser._id;
      })
      .catch( err => {
        console.log( "Error: AppLoginComponent: doSubmit:", err );
      });
  }
}

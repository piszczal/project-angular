import { Component, OnInit } from '@angular/core';
import { WebService } from '../providers/webservice';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  private userData: any;
  private userToken: any;
  private userJson: any;

  private users: User[] = [];

  constructor(private _webservice: WebService, private _router: Router) { 
    this.userData = localStorage.getItem('currentUser');
    this.userJson = JSON.parse(this.userData);
    
        if (this.userJson != null) {
          this.userToken = this.userJson.token;
        }
  }

  ngOnInit() {
    this.getUsers(this.userToken);
  }

  getUsers(token) {
    this._webservice.getUsers(token).subscribe(data => {
      this.users = data;
    },
      err => {
        console.log("Error get events!");
      });
  }

  deleteUser(userId, token) {
    
  }
}

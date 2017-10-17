import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  public userData : any;
  public userJson : any;
  public username: String;
  public email: String;
  public isLoged: boolean;

  constructor(private _router: Router){
    this.userData = localStorage.getItem('currentUser');
    this.userJson = JSON.parse(this.userData);

    if (this.userJson != null) {
      this.username = this.userJson.username;
      this.email = this.userJson.email;
      this.isLoged = true;
    }else {
      this.isLoged = false;
    }
  }

  logout(){
    this.isLoged = false;
    localStorage.clear();
    location.reload();
    this._router.navigate(['login']);
  }

}

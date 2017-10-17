import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { WebService } from '../providers/webservice';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _service: AuthService) {
   }

  ngOnInit() {
  }

  logout() {
    this._service.logout();
  }

}

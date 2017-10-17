import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { WebService } from '../providers/webservice';
import { Event } from '../event';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  private userData: any;
  private userToken: any;
  private userJson: any;

  private _event: Event;
  private parent: AppComponent;

  @Input()
  public events: Event[] = [];

  constructor(private _service: AuthService, private _webservice: WebService, private _router: Router) {
    this.userData = localStorage.getItem('currentUser');
    this.userJson = JSON.parse(this.userData);

    if (this.userJson != null) {
      this.userToken = this.userJson.token;
    }
  }

  ngOnInit() {
    this.getEvents(this.userToken);
  }

  getEvents(token) {
    this._webservice.getEvents(token).subscribe(data => {
      this.events = data;
    },
      err => {
        console.log("Error get events!");
      });
  }

  edit(id: number) {
    this._webservice.id = id;
  }

  delete(id: number) {
    this._webservice.deleteEventById(id, this.userToken).subscribe(data => {
      this.getEvents(this.userToken);
    },
      err => {
        console.log("Delete error!" + err);
      })
  }
}

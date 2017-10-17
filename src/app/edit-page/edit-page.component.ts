import { Component, OnInit } from '@angular/core';
import { WebService } from '../providers/webservice';
import { Event } from '../event';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  public showContent: boolean = false;
  id : number;
  event : Event;
  userData : any;
  userJson : any;
  userToken: any;

  constructor(private _webservice: WebService, private _router: Router) { }
  
  ngOnInit() {
    setTimeout(()=>this.showContent=true, 1000);
    this.userData = localStorage.getItem('currentUser');
    this.userJson = JSON.parse(this.userData);

    if (this.userJson != null) {
      this.userToken = this.userJson.token;
    }
    this.id = this._webservice.id;
    this.getEvent(this.id);
  }

  getEvent(id: number) {
    this._webservice.getEventById(id, this.userToken).subscribe(data => {
      this.event = data;
      console.log(this.event);
    },
  err => {
    console.log("Error get event id");
  })
  }

  saveEvent(form: NgForm) {
    if (form.value.title != null && form.value.description != null
    && form.value.tickets != null && form.value.startdate != null) {
      const body = { title: form.value.title, description: form.value.description, how_many_tickets: form.value.tickets, start_date: form.value.startdate };
      this._webservice.editEvent(body,this.id,this.userToken).subscribe(data => {
        this._router.navigate(['events']);
      },
        err => {
          console.log("Something went wrong!");
        })
    } else {
      console.log("Empty input!");
    }
  }

}

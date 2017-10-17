import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebService } from '../providers/webservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event-page',
  templateUrl: './add-event-page.component.html',
  styleUrls: ['./add-event-page.component.css']
})
export class AddEventPageComponent implements OnInit {

  private userData: any;
  private userToken: any;
  private userJson: any;


  constructor(private _webservice: WebService, private _router: Router) { 
    this.userData = localStorage.getItem('currentUser');
    this.userJson = JSON.parse(this.userData);

    if (this.userJson != null) {
      this.userToken = this.userJson.token;
    }
  }

  ngOnInit() {
    
  }

  addEvent(form: NgForm) {
    if (form.value.title != null && form.value.description != null
    && form.value.tickets != null && form.value.startdate != null) {
      const body = { title: form.value.title, description: form.value.description, how_many_tickets: form.value.tickets, start_date: form.value.startdate };
      this._webservice.addEvent(body,this.userToken).subscribe(data => {
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

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import { Event } from '../event';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {

    public id: number;

    constructor(private _router: Router, private http: Http) { }

    getEvents(token): Observable<Event[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers });

        return this.http.get('https://quiet-meadow-18469.herokuapp.com/api/events/', options).map((data: Response) => data.json());
    }

    getEventById(eventID,token): Observable<Event> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers});
        
        return this.http.get('https://quiet-meadow-18469.herokuapp.com/api/events/'+eventID, options).map((data: Response) => data.json());
    }

    addEvent(body, token): Observable<String> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers});

        return this.http.post('https://quiet-meadow-18469.herokuapp.com/api/events/', JSON.stringify(body), options).map((data: Response) => data.json());
    }

    editEvent(body, eventID, token) : Observable<String> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers});
 
        return this.http.put('https://quiet-meadow-18469.herokuapp.com/api/events/'+eventID,JSON.stringify(body), options).map((data: Response) => data.text() ? data.json() : {});
    }
    
    deleteEventById(eventID, token): Observable<String> {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers});

        return this.http.delete('https://quiet-meadow-18469.herokuapp.com/api/events/'+eventID, options).map((data: Response) => data.text() ? data.json() : {});
    }

    getUsers(token): Observable<User[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers });

        return this.http.get('https://quiet-meadow-18469.herokuapp.com/api/users/', options).map((data : Response) => data.json());
    }

    deleteUserById(userID, token): Observable<String> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + token);
        let options = new RequestOptions({ headers: headers});

        return this.http.delete('https://quiet-meadow-18469.herokuapp.com/api/users/'+userID).map((data: Response) => data.json());
    }

    getServerLogs(token): Observable<String> {
        return null;
    }


}
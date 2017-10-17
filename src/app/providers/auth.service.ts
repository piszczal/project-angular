import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(private _router: Router, private http: Http) { }

    private URL = 'https://quiet-meadow-18469.herokuapp.com/';

    login(body): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('https://quiet-meadow-18469.herokuapp.com/api/backend-token-auth/', JSON.stringify(body),
            options);
    }

    logout() {
        localStorage.removeItem('currentUser');
        this._router.navigate(['login']);
    }
}

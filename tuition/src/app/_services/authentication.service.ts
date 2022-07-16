import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'app/model/user.model';
import * as moment from 'moment';

class DecodedToken {
    exp: number;
    username: string;
  }

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    // private currentUserSubject: BehaviorSubject<UserModel>;
    // public currentUser: Observable<UserModel>;
    private decodedToken
    constructor(private http: HttpClient) {
        // this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
        // this.currentUser = this.currentUserSubject.asObservable();
        this.decodedToken = JSON.parse(localStorage.getItem('auth_meta')) || new DecodedToken();
        
    }
    // private saveToken(token: any): any {
    //     this.decodedToken = jwt.decodeToken(token);
    //     localStorage.setItem('auth_tkn', token);
    //     localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    //     return token;
    //   }
    // public get currentUserValue(): UserModel {
    //     return this.currentUserSubject.value;
    // }

    // login(username: string, password: string) {
    //     return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
    //         .pipe(map(user => {
    //             // login successful if there's a jwt token in the response
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 this.currentUserSubject.next(user);
    //             }

    //             return user;
    //         }));
    // }

    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    //     this.currentUserSubject.next(null);
    // }
    public isAuthenticated(): boolean {
        return moment().isBefore(moment.unix(this.decodedToken.exp));
      }
}
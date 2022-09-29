import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  setUser(data: any) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(data));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('loggedInUser') || '');
  }

  setToken(token: any) {
    sessionStorage.setItem('token', token);
  }
  getToken() {
    return sessionStorage.getItem('token');
  }

  logout() {
    return sessionStorage.clear();
  }
}

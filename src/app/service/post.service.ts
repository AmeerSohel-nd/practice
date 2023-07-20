import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDetails } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getPost(): Observable<UserDetails> {
    // for Observable did type casting as UserDetails object
    return this.http
      .get<UserDetails>(this.postUrl)
      .pipe(catchError((error) => throwError('Something went wrong!')));
  }
}

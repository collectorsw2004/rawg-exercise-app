import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Game} from "../models/game";

const BACKEND_URL = 'http://localhost:9000';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gamesURL = BACKEND_URL + '/videogames';


  constructor(private http: HttpClient) {
  }

  appendHttpParam(query: string, param: string) {
    return (new HttpParams().append(param, query));
  }


  findAllByTitle(title: string): Observable<Game[]> {
    if (!title) {
      // @ts-ignore
      return;
    }
    const url = `${this.gamesURL}`;
    let params = this.appendHttpParam(title, 'search')
    return this.http.get<Game[]>(url, {params});

  }

}

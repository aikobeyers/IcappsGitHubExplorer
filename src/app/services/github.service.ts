import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QueryObject} from '../common/model/queryObject';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  get query(): QueryObject {
    return this._query;
  }

  set query(value: QueryObject) {
    this._query = value;
  }

  private readonly url: string = 'http://api.github.com/search';
  private _query: QueryObject;

  constructor(private http: HttpClient) {  }

  searchRepositories(): Observable<any>{

    return this.http.get(`${this.url}/repositories?q=${this.query.query}`, {observe: 'response'});
  }



}

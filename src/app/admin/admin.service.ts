import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http'
import getUrl from '../utils/callApi'
import csv from 'node-csv';

@Injectable()
export class AdminService {

  private options: Object

  constructor(private http: Http) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: headers });
  }

  loadList(request : Object) {
    return this.http.post(getUrl() + `pc`, request)
  }
}
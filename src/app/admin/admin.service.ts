import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import getUrl from '../utils/callApi'
import csv from 'node-csv';

import { Observable } from 'rxjs/Observable';
import { PC } from './pclist/pc.model'; 

@Injectable()
export class AdminService {

  private options: Object;
  private serviceURL = "/api/pc";
  
  constructor(private http: HttpClient) { 
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: headers });
  }

  getPC() : Observable<PC[]>{
    //console.log("getPC");
    //this.http.get<PC[]>(this.serviceURL).forEach(function(a){console.log(a);});
    return this.http.get<PC[]>(this.serviceURL);
  }

  loadList(request : Object) {
    return this.http.post(getUrl() + `pc`, request)
  }

}
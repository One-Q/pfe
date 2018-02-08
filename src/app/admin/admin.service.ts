import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import getUrl from '../utils/callApi'
import csv from 'node-csv';

import { Observable } from 'rxjs/Observable';
import { PC } from './pclist/pc.model'; 
import { Problem } from './list-problem/problem.model';

const equal = require('deep-equal');

@Injectable()
export class AdminService {

  private options: Object;
  private serviceURL = "/api/pc";
  private PCSelected : Array<PC> = new Array<PC>();
  
  constructor(private http: HttpClient) { 
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: headers });
  }

  getPC() : Observable<PC[]>{
    return this.http.get<PC[]>(this.serviceURL);
  }

  selectPC(pc:PC) : void{
    if(this.PCSelected.find(e => equal(e,pc))){
      return;
    }
    this.PCSelected.push(pc);
    return;
  }
  unselectPC(pc:PC) : void{
    this.PCSelected.splice(this.PCSelected.indexOf(pc), 1);
    return;
  }

  getSelectedPC() : PC[]{
    return this.PCSelected;
  }

  loadList(request : Object) {
    return this.http.post(getUrl() + `pc`, request)
  }

  getProblems() : Observable<Problem[]>{
    return this.http.get<Problem[]>(getUrl()+'problems');
  }

}
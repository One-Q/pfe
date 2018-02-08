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
  private selection = [];
  
  constructor(private http: HttpClient) { 
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: headers });
  }

  getPC() : Observable<PC[]>{
    return this.http.get<PC[]>(this.serviceURL);
  }
  observers = [];
  notifyUpload() : void{
    this.observers.forEach(obs => {
      obs();
    });
  }
  onUpload(obs) : void{
    this.observers.push(obs);
  }


  updateSelection(selection:Array<string>){
    this.selection = selection;
  }

  getSelectedPC() : Array<string>{
    return this.selection;
  }

  isEmpty() : boolean {
    return this.selection.some(x => {return true});
  }

  loadList(request : Object) {
    return this.http.post(getUrl() + `pc`, request)
  }

  getProblems() : Observable<Problem[]>{
    return this.http.get<Problem[]>(getUrl()+'problems');
  }

  setResolved(id) {
    return this.http.post(getUrl() + 'problems/resolve', {
      id
    })
  }

}
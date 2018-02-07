import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, RequestOptions } from '@angular/http'
import getUrl from '../utils/callApi'

@Injectable()
export class ProblemsService {

  private options: Object

  constructor(private http: Http) { 
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({headers: headers});
  }

  machineNameValid(machineName: string){
    return this.http.get(getUrl() + `pc/${machineName}`)
  }

  createProblem(problem: Object){
    let form = new FormData()
    form.append('Name', problem['Name'])
    form.append('Description', problem['Description'])
    form.append('User', problem['User'])
    form.append('image', problem['image'])
    return this.http.post(getUrl()+ `problems`, form);
  }

}
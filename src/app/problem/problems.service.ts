import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers } from '@angular/http'
import getUrl from '../utils/callApi'

@Injectable()
export class ProblemsService {
  constructor(private http: Http) { }

  machineNameValid(machineName: string){
    return this.http.get(getUrl() + `pc/${machineName}`)
  }

  createProblem(problem: Object){
    return this.http.post(getUrl()+ `problems`, {
      
    });
  }

}
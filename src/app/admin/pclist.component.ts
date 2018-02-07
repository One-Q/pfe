import { Component, OnInit } from "@angular/core"
import { Observable } from 'rxjs/Observable'
import { DataSource } from '@angular/cdk/collections'
import { AdminService } from './admin.service'
import { PC } from './pc.model'

@Component({
   // selector : 'PClist',
    templateUrl: './pclist.component.html',
    styleUrls:['./pclist.component.scss']
})

export class PCListComponent implements OnInit{

    dataSource = new PCDataSource(this.adminService);
    displayedColumns = ['Select','Name','Local','IP','MAC','Comment'];
    //Local = DataSource[0].Local;

    constructor(private adminService: AdminService){

    }

    ngOnInit(){

    }
   
}

export class PCDataSource extends DataSource<any>{

    constructor(private adminService: AdminService){
        super();
    }

    connect(): Observable<PC[]>{
        return this.adminService.getPC();
    }

    disconnect(){

    }
}
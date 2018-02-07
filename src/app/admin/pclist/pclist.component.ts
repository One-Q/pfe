import { Component, OnInit } from "@angular/core"
import { Observable } from 'rxjs/Observable'
import { DataSource } from '@angular/cdk/collections'
import { AdminService } from '../admin.service'
import { PC } from './pc.model'

@Component({
   // selector : 'PClist',
    templateUrl: './pclist.component.html',
    styleUrls:['./pclist.component.scss']
})

export class PCListComponent implements OnInit{
    
    pcList: PC[];
    dataSource = new PCDataSource(this.adminService);
    displayedColumns = ['Select','Name','Local','IP','MAC','Comment'];

    constructor(private adminService: AdminService){
        this.dataSource.connect().subscribe(
            function(pcs){
                pcs.forEach((pc)=>{
                    console.log(pc);
                });
                this.pcList = pcs;
            },
            function(){

            }
        );
        setInterval(function(){console.log(this.pcList)},1000);
    }

    ngOnInit(){

    }

    getSelection(){
       // this.dataSource.connect().
        this.dataSource.connect().forEach(element => {
        //    if(element.checked == true){}
        });
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
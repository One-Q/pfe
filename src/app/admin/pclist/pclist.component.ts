import { Component, OnInit, ViewChild } from "@angular/core"
import { Observable } from 'rxjs/Observable'
import { DataSource } from '@angular/cdk/collections'
import { AdminService } from '../admin.service'
import { PC } from './pc.model'
import { SelectionModel } from '@angular/cdk/collections'
import {MatPaginator } from '@angular/material'

@Component({
    selector : 'PClist',
    templateUrl: './pclist.component.html',
    styleUrls:['./pclist.component.scss']
})

export class PCListComponent implements OnInit{
    
    dataSource = new PCDataSource(this.adminService);
    displayedColumns = ['Select','Name','Local','IP','MAC','Comment'];

    initialSelection = [];
    allowMultiSelect = true;
    selection = new SelectionModel<string>(this.allowMultiSelect, this.initialSelection);

    constructor(private adminService: AdminService){
        adminService.onUpload(()=>{
            this.dataSource = new PCDataSource(this.adminService);
            this.selection = new SelectionModel<string>(this.allowMultiSelect, this.initialSelection);
            this.notifyService();
        });
    }

    ngOnInit(){
        
    }

    /** Whether the number of selected elements matches the total number of rows. */
    private isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data().length;
        return numSelected == numRows;
    }
    
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    private masterToggle() {
        if(this.isAllSelected()){
            this.selection.clear();
        }else{
            this.dataSource.data().forEach(row => {
                this.selection.select(row.Name);
            });
        }
    }

    private notifyService(){
        this.adminService.updateSelection(this.selection.selected);
    }
   
}

export class PCDataSource extends DataSource<any>{

    list:PC[] = new Array<PC>();
    observer;

    constructor(private adminService: AdminService){
        super();
        this.observer = this.adminService.getPC();
        this.connect().subscribe(l=>{
            this.list = l;
        });
    }

    connect(): Observable<PC[]>{
        return this.observer;
    }

    data(): PC[]{
        return this.list;
    }

    disconnect(){

    }

}
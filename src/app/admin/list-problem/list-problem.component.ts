import { Component, OnInit} from "@angular/core"
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs/Observable'
import { DataSource } from '@angular/cdk/collections'
import { Problem } from './problem.model';
import { MatSnackBar } from '@angular/material';
@Component({
    selector: 'ListProblem',
    templateUrl: './list-problem.component.html',
    styleUrls: ['./list-problem.component.scss']
})

export class ListProblemComponent implements OnInit {
    dataSource = new ProblemDataSource(this.service);
    problemsList : Problem[] = [];
    displayedColumns = ['Name','Local','User','Description','Date','Image'];

    constructor(private service: AdminService, private snackBar: MatSnackBar) { }

    ngOnInit(){
        this.dataSource.connect().subscribe((problems) => {
            this.problemsList = problems;
        })
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, '', {
          duration: 3000,
        });
      }

    toggleResolved(problem: Problem){
        this.service.setResolved(problem._id).subscribe(data => {
            problem.Problem.Resolved = true;
            this.openSnackBar('Priblème résolu')  
        }, err => {
            this.openSnackBar(err.err)
        })
    }

}

export class ProblemDataSource extends DataSource<any>{

    constructor(private adminService: AdminService) {
        super();
    }

    connect(): Observable<Problem[]> {
        return this.adminService.getProblems();
    }

    disconnect() {

    }
}


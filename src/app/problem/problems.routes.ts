import { ProblemFormComponent } from './problem-form/problem-form.component';



export const routes = [
  {
    path: '', children: [
      { path: ':machineName', component: ProblemFormComponent }
    ]
  }
]
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'file',  // <home></home>
  styleUrls: [ './file.component.scss' ],
  templateUrl: './file.component.html'
})
export class FileComponent {

  @Input() files: [string] = ['test1']

  constructor() {
    this.files.push('test2')
  }

}
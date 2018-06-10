
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sandbox',  // <home></home>
  styleUrls: [ './sandbox.component.scss' ],
  templateUrl: './sandbox.component.html'
})
export class SandboxComponent {

  isVisible: boolean = true;
  isDisabled: boolean = false;

  constructor() {

  }
    
}
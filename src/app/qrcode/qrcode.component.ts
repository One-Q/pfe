import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qrcode', 
  styleUrls: [ './qrcode.component.scss' ],
  templateUrl: './qrcode.component.html'
})

export class QrcodeComponent {

  public qrcodelist: Array<String> = [];
  @Input() name: string;
  public url: string;
  constructor() {
    this.url = 'www.ipl-resolver.herokuapp.com/problem/'+name;
  }
 
  ngOnInit() {

  }
    
}
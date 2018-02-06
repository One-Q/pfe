import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode', 
  styleUrls: [ './qrcode.component.scss' ],
  templateUrl: './qrcode.component.html'
})
export class QrcodeComponent {

  public myAngularxQrCode: string = '';

  constructor() {
    this.myAngularxQrCode = 'visit us : www.goqr.me/qr-codes/type-qr-url.html';
  }
 
  ngOnInit() {

  }
    
}
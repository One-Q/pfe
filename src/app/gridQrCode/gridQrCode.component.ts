import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { QrcodeComponent } from './qrcode';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-gridQrCode', 
  styleUrls: [ './gridQrCode.component.scss' ],
  templateUrl: './gridQrCode.component.html'
})

export class GridQrCodeComponent {

  @Input() qrcodelist: Array<String> = [];
  
  constructor() {
    this.qrcodelist = ['2','didier','kyo','jul','sartre','total','98','jambon',
        'paul','element','suffixe','bebe','zair','babybel','loutre','didier','kyo','jul','sartre','total','98','jambon',
        'paul','element','suffixe','bebe','zair','babybel','loutre','didier','kyo','jul','sartre','total','98','jambon',
        'paul','element','suffixe','bebe','zair','babybel','loutre','didier','kyo','jul','sartre','total','98','jambon',
        'paul','element','suffixe','bebe','zair','babybel','loutre'];
  }

  ngAfterViewChecked(){
    //this.exportPDF();
  }
  
  exportPDF(){
    var element = document.getElementById('results');
    html2pdf(element, {
      margin:       [10, 2, 0, 0],
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { dpi: 256, letterRendering: true },
      jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' }
    });
  }

  ngOnInit() {

  }
    
}
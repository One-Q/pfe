import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { QrcodeComponent } from './qrcode';
import { AdminService } from '../admin.service'
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-gridQrCode', 
  styleUrls: [ './gridQrCode.component.scss' ],
  templateUrl: './gridQrCode.component.html'
})

export class GridQrCodeComponent implements OnInit{
  private qrcodelist: Array<String> = [];
  
  constructor(private adminService: AdminService){
  };

  ngOnInit(): void {
    this.adminService.currentMessage.subscribe(message => this.qrcodelist = message)
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


  ngAfterViewInit() {
    this.exportPDF();
  }
    
}
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { GridQrCodeComponent } from './gridQrCode'
import { ListUploadComponent } from './list-upload'
import { ListProblemComponent } from './list-problem'
import { PCListComponent } from './pclist'
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
 
@Component({
  selector: 'app-admin',
  styleUrls: [ './admin.component.scss' ],
  templateUrl: './admin.component.html'
})
export class AdminComponent implements AfterContentInit {
  gridQrCodeFactory;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver){}

  ngAfterContentInit(): void {
    this.gridQrCodeFactory = this.resolver.resolveComponentFactory(GridQrCodeComponent);
  }

  savePDF(){
    const component = this.entry.createComponent(this.gridQrCodeFactory);
  }

}
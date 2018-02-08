import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qrcode', 
  styleUrls: [ './qrcode.component.scss' ],
  templateUrl: './qrcode.component.html'
})

export class QrcodeComponent implements OnInit{
  private _name: string;
  public url: string;
  constructor() {};
  
  get name(): string {
    return this._name;
  }

  @Input()
  set name(name: string) {
    console.log('got name: ', name);
    this._name = name;
  }

  ngOnInit() {
    this.url = 'ipl-resolver.herokuapp.com/problem/'+this._name;
    console.log('url: ', this.url);
  }

}
import { Component } from "@angular/core"

@Component({
    selector : 'PClist',
    templateUrl: './pclist.component.html',
    styleUrls:['./pclist.component.scss']
})

export class PCListComponent{
    Local = "019";
    Name = "LEN1401";
    IP = "17.17.17.1";
    MAC = "33-33-33-33-33";
    Comment = "PC temporaire";
}
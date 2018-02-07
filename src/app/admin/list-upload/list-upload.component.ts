import { Component } from "@angular/core"
import { AdminService } from '../admin.service';

@Component({
    selector: 'ListUpload',
    templateUrl: './list-upload.component.html',
    styleUrls: ['./list-upload.component.scss']
})

export class ListUploadComponent {
    private file: File;

    constructor(private service: AdminService) { }

    submitForm() {
        if (this.file == null)
            console.log("manque un fichier chef")
        else {
            let obj = this
            let reader = new FileReader()
            reader.readAsText(this.file)
            reader.onloadend = function (e) {
                let content: string = reader.result
                let buffer = content.split("\n")
                let temp = obj.file.name.split('.')[0]
                let request = {}
                request['Local'] = temp.substr(6, temp.length)
                request['import'] = []
                for (let i = 1; i < buffer.length; i++) {
                    if (buffer[i] != "") {
                        let values = buffer[i].split(";")
                        request['import'].push({
                            IP: values[0].slice(1,-1),
                            Name: values[1].slice(1,-1),
                            MAC: values[2].slice(1,-1),
                            Comment: values[3].slice(1,-2)
                        })
                    }
                }
                obj.service.loadList(request).subscribe(data => console.log(data), err => {console.log(err)})
            }
        }
    }

        fileChange($event) {
            let reader = new FileReader();
            if ($event.target.files && $event.target.files.length > 0) {
                let file = $event.target.files[0];
                this.file = file
            }
        }
    }
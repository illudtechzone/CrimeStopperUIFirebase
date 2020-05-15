import { ComplaintType } from './../../class/complaint-type';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { ComplaintDTO, MediaDTO } from 'src/app/api/models';
import { ImageSelectorComponent } from '../image-selector/image-selector.component';
import { CommandResourceService } from 'src/app/api/services/command-resource.service';
import { HttpClient } from '@angular/common/http';
import { Complaint } from 'src/app/class/complaint';
import { Media } from 'src/app/class/media';


@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.scss'],
})
export class AddComplaintComponent implements OnInit {

  @Input() complaintType:string;

  complaint: Complaint = {};
  media: Media = {};
   image: any = new Image();

  constructor(private modalController: ModalController, private commandResourceService: CommandResourceService,
              private http: HttpClient ) {
console.log('complaint type is '+this.complaintType);

               }

  ngOnInit() {
    console.log('complaint type is '+this.complaintType);
this.complaint.type=this.complaintType;

  }

  dismiss() {

    this.modalController.dismiss();
  }
  onChange($event: any) {

    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (loadEvent: any) => {
      this.image.src = loadEvent.target.result;
      console.log('Image Src' + this.image.src);
      this.selectImage();
    };
    myReader.readAsDataURL(file);

  }

   async selectImage() {

       this.media.fileBlob = this.image.src.substring(this.image.src.indexOf(',') + 1);
       this.media.fileBlobContentType = this.image.src.slice(this.image.src.indexOf(':') + 1, this.image.src.indexOf(';'));

  }

postComplaint() {
  console.log('Post Media'+this.complaint.type+this.complaint.summary);


  this.commandResourceService.createMediaUsingPOST(this.media).subscribe(x => {
    console.log('x' + x);
  });


}
}

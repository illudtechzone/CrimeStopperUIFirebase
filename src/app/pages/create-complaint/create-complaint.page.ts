import { Component, OnInit } from '@angular/core';
import { ImageSelectorComponent } from 'src/app/components/image-selector/image-selector.component';
import { ModalController } from '@ionic/angular';
import { ComplaintDTO, MediaDTO } from 'src/app/api/models';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.page.html',
  styleUrls: ['./create-complaint.page.scss'],
})
export class CreateComplaintPage implements OnInit {
complaintDTO: ComplaintDTO;
mediaDTO: MediaDTO;
  constructor(private modalController: ModalController) { }

  ngOnInit() {

  }

   async selectImage() {
    console.log(" It is working ");
    const modal = await this.modalController.create({
      component: ImageSelectorComponent,
      cssClass: 'half-height'
    });

    modal.onDidDismiss()
    .then(data => {

       this.mediaDTO.fileBlob = data.data.image.substring(data.data.image.indexOf(',') + 1);
       this.mediaDTO.fileBlobContentType = data.data.image.slice(data.data.image.indexOf(':') + 1, data.data.image.indexOf(';'));
    });

    return await modal.present();
  }

}

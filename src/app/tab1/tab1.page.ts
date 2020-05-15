import { ComplaintType } from './../class/complaint-type';
import { Router } from '@angular/router';
import { CreateComplaintPage } from './../pages/create-complaint/create-complaint.page';
import { AddComplaintComponent } from './../components/add-complaint/add-complaint.component';
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

complaintTypes: ComplaintType[]=[];

  constructor(private modalController: ModalController,
              private nav: NavController) {

                this.complaintTypes.push({type: 'Bribe', summary: 'if any goverment employes ask for bribe u can complaint in thos section',
                 imageUrl: 'assets/bribe.jpg'});
                this.complaintTypes.push({type: 'Trafic voilation ', summary: 'rule violations realted to vehicleas',
                 imageUrl: 'https://media.istockphoto.com/vectors/angry-bad-rushing-driver-auto-car-man-character-braking-violation-low-vector-id964318566?k=6&m=964318566&s=612x612&w=0&h=JsmYcnRWJ94FPmqyDZuaEMnE--LuP3_4HyHm2VKn2cY='});
                 console.log(this.complaintTypes);


              }

  async addComplaint(type:string) {
    const modal = await this.modalController.create({
    component: AddComplaintComponent,
    componentProps: { 'complaintType': type }
    });

    await modal.present();

  }
  showComment() {
    this.nav.navigateForward('/add-comment');

  }

}

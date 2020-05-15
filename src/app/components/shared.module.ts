import { ComplaintTypeComponent } from './complaint-type/complaint-type.component';

import { ComplanitCardComponent } from './complanit-card/complanit-card.component';

import { ImageCropperModule } from 'ngx-img-cropper';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AddComplaintComponent } from './add-complaint/add-complaint.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { ShortComplaintCardComponent } from './short-complaint-card/short-complaint-card.component';



@NgModule({

  declarations: [AddComplaintComponent, ComplanitCardComponent,ImageSelectorComponent,ComplaintTypeComponent,ShortComplaintCardComponent],

  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ImageCropperModule,
    RouterModule,
    IonicModule.forRoot(),
  ],

exports: [AddComplaintComponent, ComplanitCardComponent,ImageSelectorComponent,ComplaintTypeComponent,ShortComplaintCardComponent],
entryComponents:[ShortComplaintCardComponent]


})
export class SharedModule { }

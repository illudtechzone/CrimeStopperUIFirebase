import { KeycloakService } from 'src/app/services/security/keycloak.service';
import { CurrentUserService } from './../services/current-user.service';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { ImageSelectorComponent } from './../components/image-selector/image-selector.component';
import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  username: string="manu";

  
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Logout',
      url: '/',
      icon: 'log-out'
    }
  ];

  user: any = {};
  imageContent: any = {};
  image: any = {};
  readonly = true;

  edit() {

    this.readonly = !this.readonly;
    console.log('this wAS', this.readonly);
  }

  constructor(private currentUserService: CurrentUserService,
              private modalController: ModalController,
              private navController: NavController,
              private alertController: AlertController,
              private keyCloackService: KeycloakService,
              private camera: Camera
              ) { }

  ngOnInit() {
    console.log('entering');
    this.currentUserService.getCurrentUser(true).then(result => {
      console.log('user is getting', result);
      this.user = (result);
    },
    error => {
      console.log('error while getting user', error);
    });

  }
 async confirmation() {
   const alert = await this.alertController.create({
     header: 'Confirm',
     subHeader: '',
     message: 'Profile Updated',
     buttons: [ {
      text: 'Cancel',
      role: 'cancel'
    }, {
      text: 'Confirm',
      handler: () => {
        this.update();
      }
    }]
   });
   await alert.present();
 }

 update() {
   console.log(this.user);
   this.user.family_name = '';
   this.keyCloackService.updateCurrentUserDetails(this.user).then( res=> {
      console.log('Uers Upadtes');
      this.edit();
   },
   () => {
    alert('Faile to update to user');
   });
 }


 async uploadImage() {

   const modal = await this.modalController.create({
     component: ImageSelectorComponent,
     cssClass: 'half-height'
   });
   modal.onDidDismiss().then(data => {
    console.log(data.data.image, 'mmmmkkk');
    this.image = data.data.image.substring(
       data.data.image.indexOf(',') + 1,
     );
    this.imageContent = data.data.image.slice(
       data.data.image.indexOf(':') + 1,
       data.data.image.indexOf(';')
     );
    console.log(this.image, 'image');
   });
   return await modal.present();
 }

 takePicture() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then((imageData) => {
    this.image = 'data:image/jpeg;base64,';
  }, (err) => {
    console.log('Camera issue:' + err);
  });
}

logout(){
  console.log("loging out");
  this.keyCloackService.logout();
}

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';
import { KeycloakService } from 'src/app/services/security/keycloak.service';
import { Util } from 'src/app/services/security/util';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.page.html',
  styleUrls: ['./signup-login.page.scss'],
})
export class SignupLoginPage implements OnInit {

  name: '';
  email: '';
  phone: number;
  password: '';
  showErrorSignup = false;
  showErrorLogin = false;
  loginbar = true;
  value = 'login';

  @ViewChild('slides', { static: false }) slides: IonSlides;

  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  signupForm = new FormGroup (
    // {
    // name: new FormControl('', [
    //   Validators.required, Validators.minLength(4),
    //   Validators.pattern('^[a-zA-Z ]*$')
    // ]),
    {
    email: new FormControl('', [
      Validators.required, Validators.email
    ]),
    phone: new  FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(15)
    ]),
    password: new FormControl ('', [
      Validators.required
    ]),
    confirmPassword: new FormControl ('', [
      Validators.required
    ])
  });
    ngOnInit() {
    }

    constructor(private navcontrol: NavController,
                private util: Util,
                private keycloakService: KeycloakService,
                private fb: FormBuilder
                ) {
                 }

    login() {
    console.log('username password is ' + this.name );
    if (!this.loginForm.invalid) {
    this.util.createLoader().then(loader => {
      loader.present();
      this.keycloakService.authenticate(
        { username: this.name, password: this.password },
        () => {
          loader.dismiss();
          this.util.navigateRoot();
          this.util.createToast('Logged in successfully' , 'checkmark-circle-outline');
        },
        () => {
          loader.dismiss();
          this.util.createToast('Invalid user credentials' , 'close-circle-outline');
        }
      );
    });
    } else {
      this.showErrorLogin = true;
    }
  }

    signup() {
      console.log(this.signupForm.invalid);



      this.email = this.signupForm.get('email').value;
      this.password = this.signupForm.get('password').value;
      console.log(this.email + this.password);
      const formValue = this.signupForm.value;
      if (!this.signupForm.invalid) {


            console.log('asd');

            this.util.createLoader().then(loader => {
              console.log('dmpply');
              loader.present();
              const user = { username: this.email, email: this.email };

              this.keycloakService.createAccount(user, this.password,
                (res) => {
                  console.log('successful');
                  this.util.createToast('Registration Successfully Done !');
                  this.clearForm();
                  this.value='login';
                  loader.dismiss();
                },
                (err) => {
                  loader.dismiss();
                  console.log('error successful', err);

                  if (err.response.status === 409) {
                    this.util.createToast('User Already Exists!');
                  } else {
                    console.log('error creating user ', err.response);

                    this.util.createToast('Cannot Register User.Please Try later', err);
                  }
                });
            });

          } else {
          this.util.createToast('invalid form !');

        }
    }

    slide(value) {
      this.value = value.detail.value;
      if (this.value === 'login') {
        this.slides.slideTo(0);
      } else {
        this.slides.slideTo(1);
      }
    }

    slideChange() {
      let currentSlide;
      this.slides.getActiveIndex().then(num => {
        currentSlide = num;
        if (this.value === 'login' && currentSlide !== 0) {
          this.value = 'signup';
        } else if (this.value === 'signup' && currentSlide !== 1) {
          this.value = 'login';
        }
      });
    }

    passwordMatch() {
      const formValue = this.signupForm.value;
      if (!(formValue.password === formValue.confirmPassword)) {
        this.util.createToast(' Password dont match ');
        formValue.confirmPassword = '';
        return false;
      }
      return true;
    }

    clearForm() {

     this.name= '';
     this.email = '';
     this.password = '';

    }
}

import { AuthGuardService } from './services/security/auth-guard.service';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { UtilService } from './services/util.service';
import { AuthInterceptor } from './services/security/auth-interceptor';
import { Camera } from '@ionic-native/camera/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { ConfigsModule } from './configs/configs.module';
import { Util } from './services/security/util';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-img-cropper';
import { ApiModule } from './api/api.module';

///





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ConfigsModule,
    BrowserModule,
SharedModule,
ApiModule,

    IonicModule.forRoot(),
    AppRoutingModule,
    OAuthModule.forRoot(),
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  providers: [
    StatusBar,
    AuthGuardService,
    SplashScreen,
    Camera,
    Util,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true

    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

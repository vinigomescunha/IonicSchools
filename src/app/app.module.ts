import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './Services/AuthService';
import { RequestService } from './Services/RequestService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './Services/DataService';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    RequestService,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

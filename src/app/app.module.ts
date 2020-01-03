import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { QRScanner } from '@ionic-native/qr-scanner';
import { EmployeeDetailsPage } from '../pages/employee-details/employee-details';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { HomePage } from '../pages/home/home';
//Bader

@NgModule({
  declarations: [
    MyApp,
  //  HomePage,
    //bader
    EmployeeDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  //  HomePage,
    //bader
    EmployeeDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

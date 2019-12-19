import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private qrScanner: QRScanner) {

  }

  ionViewWillEnter(){
    this.showCamera();

    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {

          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          this.navCtrl.push('EmployeeDetailsPage', {
            id: text
          });

        });

        this.qrScanner.show();


      } else {
        this.cameraPermissionError();
      }
    })
    .catch((e: any) => { alert('error '+ e); });
  }

  cameraPermissionError() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Camera permission is not granted for this app!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  ionViewWillLeave(){
    this.qrScanner.hide(); // hide camera preview
    this.hideCamera();
  }
  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-employee-details',
  templateUrl: 'employee-details.html',
})
export class EmployeeDetailsPage {

  employee: Observable<any>;
  empData: any;
  rs: Observable<any>;
  form = {
    id: '0',
    name: '',
    mobile: '',
    comments: '',
    storeName: ''
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public httpClient: HttpClient) {

//Bader
  //    let loading = this.loadingCtrl.create({
  //      content: 'Please wait...'
  //    });

  //    loading.present();

/*
      this.employee = this.httpClient.get(`http://192.168.43.106:8888/tabeq/api/getEmployeeInfo.php?id=${navParams.get('id')}`);

      this.employee.subscribe(data => {
      loading.dismiss();
        if(!data.status){
          let alert = this.alertCtrl.create({
            title: 'Not Found!',
            subTitle: 'Employee not found in the system or id is not correct',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              },
              {
                text: 'Report',
                handler: () => {
                  this.navCtrl.push('ReportPage', {id: 0});
                }
              }
            ]
          });

          alert.present();
        } else {
          this.empData = data;

        }

      });

    }
*/

}
    end(){
      this.navCtrl.popToRoot();
    }

    backToRoot(){
      this.navCtrl.popToRoot();
    }

    report(){
      this.navCtrl.push('ReportPage', {id: "this.empData.id"});
    }

}

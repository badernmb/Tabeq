import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

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
    public httpClient: HttpClient,
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
   this.form.id = this.navParams.get('id');
  }

  submit(){

      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();

      const httph = new HttpHeaders({
        'Content-Type':  'application/json'
      });

      this.rs = this.httpClient.post(`http://192.168.43.106:8888/tabeq/api/submitEmployeeReport.php`, this.form,
      { headers: httph});

      this.rs.subscribe(data => {
        if(data.status){

          let alert = this.alertCtrl.create({
            title: 'Done!',
            subTitle: 'report has been sent!',
            buttons: [
              {
                text: 'Pkay',
                handler: () => {
                  this.navCtrl.popToRoot();
                }
              }
            ]
          });

          alert.present();

        } else {
          alert('error');
        }

      });
  }

  backToRoot(){
    this.navCtrl.popToRoot();
  }

  report2(){
    this.navCtrl.push('EmployeeDetailsPage', {id: "this.empData.id"});
  }

}

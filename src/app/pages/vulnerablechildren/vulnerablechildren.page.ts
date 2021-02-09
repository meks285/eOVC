import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vulnerablechildren',
  templateUrl: './vulnerablechildren.page.html',
  styleUrls: ['./vulnerablechildren.page.scss'],
})
export class VulnerablechildrenPage implements OnInit {
  state: any;
  lga: any;
  facility: any;
  ward: any;
  community: any;
  cbo_name: any;
  unique_id: any;
  name_of_child: any;
  sex: any;
  age_yrs: any;
  age_mths: any;
  address: any;
  caregiver_name: any;
  caregiver_phone: any;
  checked1: any;
  service_date1: any;
  checked2: any;
  service_date2: any;
  checked3: any;
  service_date3: any;
  checked4: any;
  service_date4: any;
  checked5: any;
  service_date5: any;
  checked6: any;
  service_date6: any;
  checked7: any;
  service_date7: any;
  checked8: any;
  service_date8: any;
  checked9: any;
  service_date9: any;
  checked10: any;
  service_date10: any;
  checked11: any;
  service_date11: any;
  checked12: any;
  service_date12: any;
  checked13: any;
  service_date13: any;
  checked14: any;
  service_date14: any;
  checked15: any;
  service_date15: any;
  checked16: any;
  service_date16: any;
  checked17: any;
  service_date17: any;
  checked18: any;
  service_date18: any;
  checked19: any;
  service_date19: any;
  checked20: any;
  service_date20: any;
  checked21: any;
  service_date21: any;
  checked22: any;
  service_date22: any;
  checked23: any;
  service_date23: any;
  checked24: any;
  service_date24: any;
  checked25: any;
  service_date25: any;
  checked26: any;
  service_date26: any;
  checked27: any;
  service_date27: any;
  checked28: any;
  service_date28: any;
  checked29: any;
  service_date29: any;
  checked30: any;
  service_date30: any;
  checked31: any;
  service_date31: any;
  checked32: any;
  service_date32: any;
  checked33: any;
  service_date33: any;
  checked34: any;
  service_date34: any;
  checked35: any;
  service_date35: any;
  checked36: any;
  service_date36: any;
  checked37: any;
  service_date37: any;
  checked38: any;
  service_date38: any;
  checked39: any;
  service_date39: any;
  checked40: any;
  service_date40: any;
  checked41: any;
  service_date41: any;
  checked42: any;
  service_date42: any;
  checked43: any;
  service_date43: any;
  checked44: any;
  service_date44: any;
  checked45: any;
  service_date45: any;
  follow_upinfo: any;
  sp_name: any;
  designation: any;
  phoneno: any;
  report_date: any;
  constructor(private sqlite: SQLite, private alertController: AlertController, private navController: NavController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  async submit(){
    const loading = await this.loadingCtrl.create({
      message: 'Submitting...',
    });
  await loading.present();
  if(this.state==undefined||this.lga==undefined||this.community==undefined||this.ward==undefined||this.facility==undefined||this.cbo_name==undefined||this.unique_id==undefined||this.designation==undefined||this.phoneno==undefined||this.report_date==undefined||this.sp_name==undefined){
    this.loadingCtrl.dismiss();
      const alert = this.alertController.create({
        message: 'Incomplete VCSF Form',
        buttons: ['OK']
      }).then((alert)=>{
        alert.present();
      });
    }
    else{
      this.sqlite.create({
        name: 'eovc.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO vulnerablechildren VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[null,this.state,this.lga,this.facility,this.ward,this.community,this.cbo_name,this.unique_id,this.name_of_child,this.sex,this.age_yrs,this.age_mths,this.address,this.caregiver_name,this.caregiver_phone,this.checked1,this.service_date1,this.checked2,this.service_date2,this.checked3,this.service_date3,this.checked4,this.service_date4,this.checked5,this.service_date5,this.checked6,this.service_date6,this.checked7,this.service_date7,this.checked8,this.service_date8,this.checked9,this.service_date9,this.checked10,this.service_date10,this.checked11,this.service_date11,this.checked12,this.service_date12,this.checked13,this.service_date13,this.checked14,this.service_date14,this.checked15,this.service_date15,this.checked16,this.service_date16,this.checked17,this.service_date17,this.checked18,this.service_date18,this.checked19,this.service_date19,this.checked20,this.service_date20,this.checked21,this.service_date21,this.checked22,this.service_date22,this.checked23,this.service_date23,this.checked24,this.service_date24,this.checked25,this.service_date25,this.checked26,this.service_date26,this.checked27,this.service_date27,this.checked28,this.service_date28,this.checked29,this.service_date29,this.checked30,this.service_date30,this.checked31,this.service_date31,this.checked32,this.service_date32,this.checked33,this.service_date33,this.checked34,this.service_date34,this.checked35,this.service_date35,this.checked36,this.service_date36,this.checked37,this.service_date37,this.checked38,this.service_date38,this.checked39,this.service_date39,this.checked40,this.service_date40,this.checked41,this.service_date41,this.checked42,this.service_date42,this.checked43,this.service_date43,this.checked44,this.service_date44,this.checked45,this.service_date45,this.follow_upinfo,this.sp_name,this.designation,this.phoneno,this.report_date])
          .then(res => {
            this.loadingCtrl.dismiss();
            console.log(res);
            const alert = this.alertController.create({
              message: 'Vulnerable Children SF submitted',
              buttons: [{
                text: 'Continue',
                role: 'destructive',
                handler: () => {
                  this.navController.navigateBack('');
                }
              }]
            }).then((alert)=>{
              alert.present();
            });
          })
          .catch(e => {
            this.loadingCtrl.dismiss();
            const alert = this.alertController.create({
              message: 'Vulnerable Children SF NOT Submitted'+e.message,
              buttons: [{
                text: 'OK',
                role: 'destructive',
                handler: () => {
                  //navigator['app'].ExitApp();
                }
              }]
            }).then((alert)=>{
              alert.present();
            });
          });
      }).catch(e => {
        console.log(e);
      });
    }
  }
}

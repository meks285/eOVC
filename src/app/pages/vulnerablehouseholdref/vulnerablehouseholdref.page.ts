import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-vulnerablehouseholdref',
  templateUrl: './vulnerablehouseholdref.page.html',
  styleUrls: ['./vulnerablehouseholdref.page.scss'],
})
export class VulnerablehouseholdrefPage implements OnInit {
  state: any;
  lga: any;
  community: any;
  name_of_referred: any;
  phone: any;
  sex: any;
  age_yrs: any;
  unique_id: any;
  address: any;
  referring_cbo_name: any;
  receiving_cbo_name: any;
  service1: any;
  service2: any;
  service3: any;
  service4: any;
  service5: any;
  service6: any;
  service7: any;
  service8: any;
  service9: any;
  service10: any;
  service11: any;
  service12: any;
  service13: any;
  service14: any;
  service15: any;
  service16: any;
  service17: any;
  service18: any;
  service19: any;
  service20: any;
  service21: any;
  service22: any;
  service23: any;
  service24: any;
  service25: any;
  service26: any;
  service27: any;
  service28: any;
  service29: any;
  service30: any;
  service31: any;
  service32: any;
  additionalcomments: any;
  referrers_name: any;
  designation: any;
  phoneno_email: any;
  initials: any;
  org_prov_referral: any;
  list_service_1: any;
  list_service_1_completed: any;
  list_service_1_followup: any;
  list_service_1_date: any;
  list_service_2: any;
  list_service_2_completed: any;
  list_service_2_followup: any;
  list_service_2_date: any;
  additionalcomments_section_b: any;
  referral_complete: any;
  name_of_referral_receiver: any;
  designation_of_referral_receiver: any;
  phoneno_of_referral_receiver: any;
  initials_of_referral_receiver: any;

  constructor(private sqlite: SQLite, private alertController: AlertController, private navController: NavController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
  async submit(){
    const loading = await this.loadingCtrl.create({
      message: 'Submitting...',
    });
  await loading.present();
  if(this.state==undefined||this.lga==undefined||this.community==undefined||this.referring_cbo_name==undefined||this.receiving_cbo_name==undefined||this.unique_id==undefined||this.designation==undefined||this.referrers_name==undefined||this.designation==undefined||this.phoneno_email==undefined||this.phoneno_email==undefined||this.name_of_referral_receiver==undefined){
    this.loadingCtrl.dismiss();
      const alert = this.alertController.create({
        message: 'Incomplete VHReferral Form',
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
        db.executeSql('INSERT INTO vulnerablehousehold VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[null,this.state,this.lga,this.community,this.name_of_referred,this.phone,this.sex,this.age_yrs,this.unique_id,this.address,this.referring_cbo_name,this.receiving_cbo_name,this.service1,this.service2,this.service3,this.service4,this.service5,this.service6,this.service7,this.service8,this.service9,this.service10,this.service11,this.service12,this.service13,this.service14,this.service15,this.service16,this.service17,this.service18,this.service19,this.service20,this.service21,this.service22,this.service23,this.service24,this.service25,this.service26,this.service27,this.service28,this.service29,this.service30,this.service31,this.service32,this.additionalcomments,this.referrers_name,this.designation,this.phoneno_email,this.initials,this.org_prov_referral,this.list_service_1,this.list_service_1_completed,this.list_service_1_followup,this.list_service_1_date,this.list_service_2,this.list_service_2_completed,this.list_service_2_followup,this.list_service_2_date,this.additionalcomments_section_b,this.referral_complete,this.name_of_referral_receiver,this.designation_of_referral_receiver,this.phoneno_of_referral_receiver,this.initials_of_referral_receiver])
          .then(res => {
            this.loadingCtrl.dismiss();
            console.log(res);
            const alert = this.alertController.create({
              message: 'Vulnerable Household Referral submitted',
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
              message: 'Vulnerable Household NOT Referral Submitted'+e.message,
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

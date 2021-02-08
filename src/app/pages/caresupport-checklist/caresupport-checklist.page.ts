import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-caresupport-checklist',
  templateUrl: './caresupport-checklist.page.html',
  styleUrls: ['./caresupport-checklist.page.scss'],
})
export class CaresupportChecklistPage implements OnInit {
  state: any; 
  lga: any; 
  facility: any; 
  ward: any; 
  community: any; 
  cbo_name: any; 
  assessment_date: any; 
  unique_id: any; 
  beneficiary_name: any; 
  sex: any; 
  age_yrs: any; 
  age_mths: any; 
  address: any; 
  caregiver_phone: any; 
  art_uid_no: any; 
  sectiona_1: any; 
  sectiona_2: any; 
  sectiona_3: any; 
  sectiona_4: any; 
  sectiona_5: any; 
  sectionb_1: any; 
  sectionb_2: any; 
  sectionb_2a: any; 
  sectionb_3: any; 
  sectionb_4: any; 
  sectionb_5: any; 
  sectionb_6: any; 
  sectionb_6_other: any; 
  sectionb_7: any; 
  sectionb_8: any; 
  sectionb_9: any; 
  sectionb_10: any; 
  sectionb_11: any; 
  sectionb_12: any; 
  sectionb_12_mths: any; 
  sectionb_13: any; 
  sectionb_14: any; 
  sectionb_15: any; 
  sectionc_16: any; 
  sectionc_17: any; 
  sectionb_18: any; 
  sp_name: any; 
  designation: any; 
  phoneno: any; 
  report_date: any; 
  sectionb_5Yes: number;
  sectionb_9Yes: number;
  sectionb_7Yes: number;
  sectionb_4b: any;
  
  constructor(private sqlite: SQLite, private alertController: AlertController, private navController: NavController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }
async submit(){
  const loading = await this.loadingCtrl.create({
    message: 'Submitting...',
  });
await loading.present();
if(this.state==undefined||this.lga==undefined||this.community==undefined||this.ward==undefined||this.facility==undefined){
  this.loadingCtrl.dismiss();
    const alert = this.alertController.create({
      message: 'Incomplete Form',
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
      db.executeSql('INSERT INTO careandsupportchecklist VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[null,this.state, this.lga, this.facility, this.ward, this.community, this.cbo_name, this.assessment_date, this.unique_id, this.beneficiary_name, this.sex, this.age_yrs, this.age_mths, this.address, this.caregiver_phone, this.art_uid_no, this.sectiona_1, this.sectiona_2, this.sectiona_3, this.sectiona_4, this.sectiona_5, this.sectionb_1, this.sectionb_2, this.sectionb_2a, this.sectionb_3, this.sectionb_4,this.sectionb_4b, this.sectionb_5, this.sectionb_6, this.sectionb_6_other, this.sectionb_7, this.sectionb_8, this.sectionb_9, this.sectionb_10, this.sectionb_11, this.sectionb_12, this.sectionb_12_mths, this.sectionb_13, this.sectionb_14, this.sectionb_15, this.sectionc_16, this.sectionc_17, this.sectionb_18, this.sp_name, this.designation, this.phoneno, this.report_date])
        .then(res => {
          this.loadingCtrl.dismiss();
          console.log(res);
          const alert = this.alertController.create({
            message: 'Checklist submitted',
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
            message: 'careandsupportchecklist NOT Submitted'+e.message,
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
sectionb_5YesChk(){
  this.sectionb_5Yes=1;
}
sectionb_5NoChk(){
  this.sectionb_5Yes=0;
}
sectionb_9YesChk(){
  this.sectionb_9Yes=1;
}
sectionb_9NoChk(){
  this.sectionb_9Yes=0;
}
sectionb_7YesChk(){
  this.sectionb_7Yes=1;
  }
  sectionb_7NoChk(){
    this.sectionb_7Yes=0;
    }
  }

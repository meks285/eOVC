import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navController: NavController, private sqlite: SQLite, private loadingCtrl: LoadingController) {}

  ngOnInit(){
    this.initDB();
  }
  async gotoCSChecklist(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading Checklist...',
  });
  await loading.present();
    this.navController.navigateForward('caresupport-checklist');
    loading.dismiss();
  }
  async gotoConsentForm(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading Consent Form...',
  });
  await loading.present();
    this.navController.navigateForward('consentform');
    loading.dismiss();
  }
  async gotoVCServiceForm(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading VC Service Form...',
  });
  await loading.present();
    this.navController.navigateForward('vulnerablechildren');
    loading.dismiss();
  }
  async gotoVHRF(){
    const loading = await this.loadingCtrl.create({
      message: 'Loading HH Referral Form...',
  });
  await loading.present();
    this.navController.navigateForward('vulnerablehouseholdref');
    loading.dismiss();
  }
  initDB(){
    this.sqlite.create({
      name: 'eovc.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS careandsupportchecklist(id INTEGER PRIMARY KEY AUTOINCREMENT,state TEXT, lga TEXT, facility TEXT, ward TEXT, community TEXT, cbo_name TEXT, assessment_date TEXT, unique_id TEXT, beneficiary_name TEXT, sex TEXT, age_yrs TEXT, age_mths TEXT, address TEXT, caregiver_phone TEXT, art_uid_no TEXT, sectiona_1 TEXT, sectiona_2 TEXT, sectiona_3 TEXT, sectiona_4 TEXT, sectiona_5 TEXT, sectionb_1 TEXT, sectionb_2 TEXT, sectionb_2a TEXT, sectionb_3 TEXT, sectionb_4 TEXT,sectionb_4b TEXT, sectionb_5 TEXT, sectionb_6 TEXT, sectionb_6_other TEXT, sectionb_7 TEXT, sectionb_8 TEXT, sectionb_9 TEXT, sectionb_10 TEXT, sectionb_11 TEXT, sectionb_12 TEXT, sectionb_12_mths TEXT, sectionb_13 TEXT, sectionb_14 TEXT, sectionb_15 TEXT, sectionc_16 TEXT, sectionc_17 TEXT, sectionb_18 TEXT, sp_name TEXT, designation TEXT, phoneno TEXT, report_date TEXT)', [])
        .then(res => {
          console.log('Care & Support Checklist Table Created');
        }).catch(e => console.log(e));
        db.executeSql('CREATE TABLE IF NOT EXISTS vulnerablechildren(id INTEGER PRIMARY KEY AUTOINCREMENT,state TEXT,lga TEXT,facility TEXT,ward TEXT,community TEXT,cbo_name TEXT,unique_id TEXT,name_of_child TEXT,sex TEXT,age_yrs TEXT,age_mths TEXT,address TEXT,caregiver_name TEXT,caregiver_phone TEXT,checked1 TEXT,service_date1 TEXT,checked2 TEXT,service_date2 TEXT,checked3 TEXT,service_date3 TEXT,checked4 TEXT,service_date4 TEXT,checked5 TEXT,service_date5 TEXT,checked6 TEXT,service_date6 TEXT,checked7 TEXT,service_date7 TEXT,checked8 TEXT,service_date8 TEXT,checked9 TEXT,service_date9 TEXT,checked10 TEXT,service_date10 TEXT,checked11 TEXT,service_date11 TEXT,checked12 TEXT,service_date12 TEXT,checked13 TEXT,service_date13 TEXT,checked14 TEXT,service_date14TEXT,checked15 TEXT,service_date15 TEXT,checked16 TEXT,service_date16 TEXT,checked17 TEXT,service_date17 TEXT,checked18 TEXT,service_date18 TEXT,checked19 TEXT,service_date19 TEXT,checked20 TEXT,service_date20TEXT,checked21 TEXT,service_date21 TEXT,checked22 TEXT,service_date22 TEXT,checked23 TEXT,service_date23 TEXT,checked24 TEXT,service_date24 TEXT,checked25 TEXT,service_date25 TEXT,checked26 TEXT,service_date26TEXT,checked27 TEXT,service_date27 TEXT,checked28 TEXT,service_date28 TEXT,checked29 TEXT,service_date29 TEXT,checked30 TEXT,service_date30 TEXT,checked31 TEXT,service_date31 TEXT,checked32 TEXT,service_date32TEXT,checked33 TEXT,service_date33 TEXT,checked34 TEXT,service_date34 TEXT,checked35 TEXT,service_date35 TEXT,checked36 TEXT,service_date36 TEXT,checked37 TEXT,service_date37 TEXT,checked38 TEXT,service_date38TEXT,checked39 TEXT,service_date39 TEXT,checked40 TEXT,service_date40 TEXT,checked41 TEXT,service_date41 TEXT,checked42 TEXT,service_date42 TEXT,checked43 TEXT,service_date43 TEXT,checked44 TEXT,service_date44 TEXT,checked45 TEXT,service_date45 TEXT,follow_upinfo TEXT,sp_name TEXT,designation TEXT,phoneno TEXT,report_date TEXT)', [])
        .then(res => {
          console.log('Vulnerable Children Table Created');
        }).catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
}

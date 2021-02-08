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
  gotoConsentForm(){
    this.navController.navigateForward('consentform');
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
      })
      .catch(e => console.log(e));
  }
}

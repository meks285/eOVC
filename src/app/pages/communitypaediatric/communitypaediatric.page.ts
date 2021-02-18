import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-communitypaediatric',
  templateUrl: './communitypaediatric.page.html',
  styleUrls: ['./communitypaediatric.page.scss'],
})
export class CommunitypaediatricPage implements OnInit {
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
  assessment_date: any;
  rship_of_respondent_child: any;
  sectiona_1a: any;
  sectiona_1b: any;
  sectiona_2a: any;
  sectiona_2b: any;
  sectiona_3a: any;
  sectiona_3b: any;
  sectiona_4: any;
  sectiona_5a: any;
  sectiona_5b: any;
  sectiona_6a: any;
  sectiona_6b: any;
  sectionb_7: any;
  sectionb_8: any;
  sectionb_9: any;
  child_at_risk: any;
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
        message: 'Incomplete CBPA Checklist',
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
        db.executeSql('INSERT INTO communitypaediatrics_chklist VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[null,this.state,this.lga,this.facility,this.ward,this.community,this.cbo_name,this.unique_id,this.name_of_child,this.sex,this.age_yrs,this.age_mths,this.assessment_date,this.rship_of_respondent_child,this.sectiona_1a,this.sectiona_1b,this.sectiona_2a,this.sectiona_2b,this.sectiona_3a,this.sectiona_3b,this.sectiona_4,this.sectiona_5a,this.sectiona_5b,this.sectiona_6a,this.sectiona_6b,this.sectionb_7,this.sectionb_8,this.sectionb_9,this.child_at_risk,this.sp_name,this.designation,this.phoneno,this.report_date])
          .then(res => {
            this.loadingCtrl.dismiss();
            console.log(res);
            const alert = this.alertController.create({
              message: 'Community Paediatrics submitted',
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
              message: 'Community Paediatrics NOT Submitted'+e.message,
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

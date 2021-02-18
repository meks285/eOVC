import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OvcstatusupdatePage } from './ovcstatusupdate.page';

describe('OvcstatusupdatePage', () => {
  let component: OvcstatusupdatePage;
  let fixture: ComponentFixture<OvcstatusupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvcstatusupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OvcstatusupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunitypaediatricPage } from './communitypaediatric.page';

describe('CommunitypaediatricPage', () => {
  let component: CommunitypaediatricPage;
  let fixture: ComponentFixture<CommunitypaediatricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitypaediatricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunitypaediatricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

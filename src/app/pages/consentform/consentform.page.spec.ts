import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsentformPage } from './consentform.page';

describe('ConsentformPage', () => {
  let component: ConsentformPage;
  let fixture: ComponentFixture<ConsentformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsentformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

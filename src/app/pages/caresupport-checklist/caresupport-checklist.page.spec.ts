import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaresupportChecklistPage } from './caresupport-checklist.page';

describe('CaresupportChecklistPage', () => {
  let component: CaresupportChecklistPage;
  let fixture: ComponentFixture<CaresupportChecklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaresupportChecklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaresupportChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

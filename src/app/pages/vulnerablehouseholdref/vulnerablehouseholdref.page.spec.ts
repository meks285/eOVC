import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VulnerablehouseholdrefPage } from './vulnerablehouseholdref.page';

describe('VulnerablehouseholdrefPage', () => {
  let component: VulnerablehouseholdrefPage;
  let fixture: ComponentFixture<VulnerablehouseholdrefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnerablehouseholdrefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VulnerablehouseholdrefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

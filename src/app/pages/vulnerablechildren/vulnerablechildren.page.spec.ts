import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VulnerablechildrenPage } from './vulnerablechildren.page';

describe('VulnerablechildrenPage', () => {
  let component: VulnerablechildrenPage;
  let fixture: ComponentFixture<VulnerablechildrenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnerablechildrenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VulnerablechildrenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

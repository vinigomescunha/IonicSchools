import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolPage } from './School.page';

describe('SchoolPage', () => {
  let component: SchoolPage;
  let fixture: ComponentFixture<SchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolPage],
    imports: [IonicModule.forRoot(),/* ExploreContainerComponentModule*/]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyMonstersGetDeletePage } from './my-monsters-get-delete.page';

describe('MyMonstersGetDeletePage', () => {
  let component: MyMonstersGetDeletePage;
  let fixture: ComponentFixture<MyMonstersGetDeletePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMonstersGetDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyMonstersGetDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

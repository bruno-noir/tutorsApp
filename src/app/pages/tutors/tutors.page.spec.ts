// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { TutorsPage } from './tutors.page';

// describe('TutorsPage', () => {
//   let component: TutorsPage;
//   let fixture: ComponentFixture<TutorsPage>;

//   beforeEach(async(() => {
//     fixture = TestBed.createComponent(TutorsPage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// tutors.page.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TutorsPage } from './tutors.page';

describe('TutorsPage', () => {
  let component: TutorsPage;
  let fixture: ComponentFixture<TutorsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TutorsPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TutorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

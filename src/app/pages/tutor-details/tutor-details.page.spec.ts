import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TutorDetailsPage } from './tutor-details.page';

describe('TutorDetailsPage', () => {
  let component: TutorDetailsPage;
  let fixture: ComponentFixture<TutorDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TutorDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

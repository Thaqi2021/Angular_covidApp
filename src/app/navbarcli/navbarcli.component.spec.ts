import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcliComponent } from './navbarcli.component';

describe('NavbarcliComponent', () => {
  let component: NavbarcliComponent;
  let fixture: ComponentFixture<NavbarcliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

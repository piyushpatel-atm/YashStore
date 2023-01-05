import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarcompComponent } from './navbarcomp.component';

describe('NavbarcompComponent', () => {
  let component: NavbarcompComponent;
  let fixture: ComponentFixture<NavbarcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

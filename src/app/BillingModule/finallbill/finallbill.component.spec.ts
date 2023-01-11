import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinallbillComponent } from './finallbill.component';

describe('FinallbillComponent', () => {
  let component: FinallbillComponent;
  let fixture: ComponentFixture<FinallbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinallbillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinallbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

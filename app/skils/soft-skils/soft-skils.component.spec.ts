import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkilsComponent } from './soft-skils.component';

describe('SoftSkilsComponent', () => {
  let component: SoftSkilsComponent;
  let fixture: ComponentFixture<SoftSkilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

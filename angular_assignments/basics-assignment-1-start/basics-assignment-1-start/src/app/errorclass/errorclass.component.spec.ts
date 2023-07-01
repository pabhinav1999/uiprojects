import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorclassComponent } from './errorclass.component';

describe('ErrorclassComponent', () => {
  let component: ErrorclassComponent;
  let fixture: ComponentFixture<ErrorclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenbComponent } from './even.component';

describe('EvenbComponent', () => {
  let component: EvenbComponent;
  let fixture: ComponentFixture<EvenbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

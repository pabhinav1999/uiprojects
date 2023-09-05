import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycledemoComponent } from './lifecycledemo.component';

describe('LifecycledemoComponent', () => {
  let component: LifecycledemoComponent;
  let fixture: ComponentFixture<LifecycledemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycledemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

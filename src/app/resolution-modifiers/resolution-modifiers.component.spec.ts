import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionModifiersComponent } from './resolution-modifiers.component';

describe('ResolutionModifiersComponent', () => {
  let component: ResolutionModifiersComponent;
  let fixture: ComponentFixture<ResolutionModifiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionModifiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

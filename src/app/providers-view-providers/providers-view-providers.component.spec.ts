import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersViewProvidersComponent } from './providers-view-providers.component';

describe('ProvidersViewProvidersComponent', () => {
  let component: ProvidersViewProvidersComponent;
  let fixture: ComponentFixture<ProvidersViewProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersViewProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersViewProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

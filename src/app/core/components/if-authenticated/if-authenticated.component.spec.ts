import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAuthenticatedComponent } from './if-authenticated.component';

describe('IfAuthenticatedComponent', () => {
  let component: IfAuthenticatedComponent;
  let fixture: ComponentFixture<IfAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfAuthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

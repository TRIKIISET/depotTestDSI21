import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnepersonneComponent } from './unepersonne.component';

describe('UnepersonneComponent', () => {
  let component: UnepersonneComponent;
  let fixture: ComponentFixture<UnepersonneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnepersonneComponent]
    });
    fixture = TestBed.createComponent(UnepersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

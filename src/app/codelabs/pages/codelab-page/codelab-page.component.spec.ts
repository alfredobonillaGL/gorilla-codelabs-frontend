import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelabPageComponent } from './codelab-page.component';

describe('CodelabPageComponent', () => {
  let component: CodelabPageComponent;
  let fixture: ComponentFixture<CodelabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

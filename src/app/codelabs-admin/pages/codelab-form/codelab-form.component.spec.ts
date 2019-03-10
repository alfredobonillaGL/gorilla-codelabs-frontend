import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelabFormComponent } from './codelab-form.component';

describe('CodelabFormComponent', () => {
  let component: CodelabFormComponent;
  let fixture: ComponentFixture<CodelabFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelabFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

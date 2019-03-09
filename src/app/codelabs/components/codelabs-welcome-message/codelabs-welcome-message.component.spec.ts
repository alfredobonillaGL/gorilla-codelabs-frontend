import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelabsWelcomeMessageComponent } from './codelabs-welcome-message.component';

describe('CodelabsWelcomeMessageComponent', () => {
  let component: CodelabsWelcomeMessageComponent;
  let fixture: ComponentFixture<CodelabsWelcomeMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelabsWelcomeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelabsWelcomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

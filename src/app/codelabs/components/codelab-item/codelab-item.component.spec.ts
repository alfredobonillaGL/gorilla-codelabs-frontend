import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelabItemComponent } from './codelab-item.component';

describe('CodelabItemComponent', () => {
  let component: CodelabItemComponent;
  let fixture: ComponentFixture<CodelabItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelabItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

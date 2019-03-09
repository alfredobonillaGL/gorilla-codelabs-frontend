import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelabsListComponent } from './codelabs-list.component';

describe('CodelabsListComponent', () => {
  let component: CodelabsListComponent;
  let fixture: ComponentFixture<CodelabsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelabsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelabsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

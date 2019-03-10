import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodelabAdminListComponent } from './codelab-admin-list.component';

describe('CodelabAdminListComponent', () => {
  let component: CodelabAdminListComponent;
  let fixture: ComponentFixture<CodelabAdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodelabAdminListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodelabAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

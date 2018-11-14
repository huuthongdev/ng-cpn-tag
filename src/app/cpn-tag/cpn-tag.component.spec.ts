import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpnTagComponent } from './cpn-tag.component';

describe('CpnTagComponent', () => {
  let component: CpnTagComponent;
  let fixture: ComponentFixture<CpnTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpnTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpnTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

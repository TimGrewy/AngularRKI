import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkiExtraInfoComponent } from './rki-extra-info.component';

describe('RkiExtraInfoComponent', () => {
  let component: RkiExtraInfoComponent;
  let fixture: ComponentFixture<RkiExtraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkiExtraInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkiExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

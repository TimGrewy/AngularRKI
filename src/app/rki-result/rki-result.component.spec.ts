import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkiResultComponent } from './rki-result.component';

describe('RkiResultComponent', () => {
  let component: RkiResultComponent;
  let fixture: ComponentFixture<RkiResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkiResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

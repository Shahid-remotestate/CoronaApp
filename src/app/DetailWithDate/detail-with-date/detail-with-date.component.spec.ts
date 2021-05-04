import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWithDateComponent } from './detail-with-date.component';

describe('DetailWithDateComponent', () => {
  let component: DetailWithDateComponent;
  let fixture: ComponentFixture<DetailWithDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWithDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWithDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

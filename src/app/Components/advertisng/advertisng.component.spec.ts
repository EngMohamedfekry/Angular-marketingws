import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisngComponent } from './advertisng.component';

describe('AdvertisngComponent', () => {
  let component: AdvertisngComponent;
  let fixture: ComponentFixture<AdvertisngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

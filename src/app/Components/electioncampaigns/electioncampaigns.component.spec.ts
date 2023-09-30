import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectioncampaignsComponent } from './electioncampaigns.component';

describe('ElectioncampaignsComponent', () => {
  let component: ElectioncampaignsComponent;
  let fixture: ComponentFixture<ElectioncampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectioncampaignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectioncampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

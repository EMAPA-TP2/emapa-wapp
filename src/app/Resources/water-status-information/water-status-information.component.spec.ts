import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterStatusInformationComponent } from './water-status-information.component';

describe('WaterStatusInformationComponent', () => {
  let component: WaterStatusInformationComponent;
  let fixture: ComponentFixture<WaterStatusInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterStatusInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterStatusInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

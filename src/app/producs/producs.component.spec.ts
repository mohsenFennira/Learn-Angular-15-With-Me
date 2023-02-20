import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducsComponent } from './producs.component';

describe('ProducsComponent', () => {
  let component: ProducsComponent;
  let fixture: ComponentFixture<ProducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

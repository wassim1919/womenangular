import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetListComponent } from './sujet-list.component';

describe('SujetListComponent', () => {
  let component: SujetListComponent;
  let fixture: ComponentFixture<SujetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SujetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

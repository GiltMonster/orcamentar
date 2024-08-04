import { ComponentFixture, TestBed } from '@angular/core/testing';

import { optionsPage } from './options.page';

describe('optionsPage', () => {
  let component: optionsPage;
  let fixture: ComponentFixture<optionsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(optionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { budgetsPage } from './budgets.page';

describe('budgetsPage', () => {
  let component: budgetsPage;
  let fixture: ComponentFixture<budgetsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(budgetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

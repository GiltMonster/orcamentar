import { ComponentFixture, TestBed } from '@angular/core/testing';

import { budgets_listPage } from './budgets_list.page';

describe('budgets_listPage', () => {
  let component: budgets_listPage;
  let fixture: ComponentFixture<budgets_listPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(budgets_listPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

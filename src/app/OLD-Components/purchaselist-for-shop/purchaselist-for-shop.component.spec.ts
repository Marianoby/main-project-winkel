import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaselistForShopComponent } from './purchaselist-for-shop.component';

describe('PurchaselistForShopComponent', () => {
  let component: PurchaselistForShopComponent;
  let fixture: ComponentFixture<PurchaselistForShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaselistForShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaselistForShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

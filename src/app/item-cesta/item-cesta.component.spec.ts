import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCestaComponent } from './item-cesta.component';

describe('ItemCestaComponent', () => {
  let component: ItemCestaComponent;
  let fixture: ComponentFixture<ItemCestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAutocompleteComponent } from './geo-autocomplete.component';

describe('GeoAutocompleteComponent', () => {
  let component: GeoAutocompleteComponent;
  let fixture: ComponentFixture<GeoAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

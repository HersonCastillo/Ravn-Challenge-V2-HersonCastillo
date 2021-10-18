import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutSeparationComponent } from './grid-layout-separation.component';

describe('GridLayoutSeparationComponent', () => {
  let component: GridLayoutSeparationComponent;
  let fixture: ComponentFixture<GridLayoutSeparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridLayoutSeparationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLayoutSeparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

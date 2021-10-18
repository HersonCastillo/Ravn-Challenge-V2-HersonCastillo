import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCellComponent } from './character-cell.component';

describe('CharacterCellComponent', () => {
  let component: CharacterCellComponent;
  let fixture: ComponentFixture<CharacterCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

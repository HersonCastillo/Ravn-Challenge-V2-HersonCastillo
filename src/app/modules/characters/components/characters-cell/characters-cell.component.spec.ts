import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCellComponent } from './characters-cell.component';

describe('CharactersCellComponent', () => {
  let component: CharactersCellComponent;
  let fixture: ComponentFixture<CharactersCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

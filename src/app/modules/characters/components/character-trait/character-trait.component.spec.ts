import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTraitComponent } from './character-trait.component';

describe('CharacterTraitComponent', () => {
  let component: CharacterTraitComponent;
  let fixture: ComponentFixture<CharacterTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterTraitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

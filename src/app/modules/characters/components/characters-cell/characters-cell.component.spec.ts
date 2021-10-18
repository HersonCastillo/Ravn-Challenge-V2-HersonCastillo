import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CharactersCellComponent } from './characters-cell.component';

describe('CharactersCellComponent', () => {
  let component: CharactersCellComponent;
  let fixture: ComponentFixture<CharactersCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersCellComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersCellComponent);
    component = fixture.componentInstance;
    component.character = {
      id: 'FAKE',
      birthYear: '0001Y',
      name: 'Luke Skywalker',
      eyeColor: 'blue',
      hairColor: 'black',
      homeworld: {
        name: 'Earth#1154',
      },
      skinColor: 'white',
      species: null,
      vehicleConnection: {
        vehicles: [],
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit and event when container was clicked', () => {
    spyOn(component.characterSelected, 'emit');
    component.onCharacterClick();

    expect(component.characterSelected.emit).toHaveBeenCalled();
  });

  it("should show the character's name and specie", () => {
    const charactersName = fixture.debugElement.query(
      By.css('.character-cell__content__name')
    );
    const charactersSpecie = fixture.debugElement.query(
      By.css('.character-cell__content__specie')
    );

    expect(charactersName.nativeElement.textContent).toMatch('Luke Skywalker');
    expect(charactersSpecie.nativeElement.textContent).toMatch(
      'Specie not defined from Earth#1154'
    );
  });

  it('should returns true if the character was selected', () => {
    component.isSelected = true;
    fixture.detectChanges();

    const containerSelected = fixture.debugElement.query(
      By.css('.is-selected')
    );

    expect(containerSelected).not.toBeNull();
  });
});

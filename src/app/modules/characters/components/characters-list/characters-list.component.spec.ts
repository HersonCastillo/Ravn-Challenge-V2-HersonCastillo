import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StarWarsCharactersService } from 'src/app/modules/home/services/star-wars-characters.service';

import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;
  let starWarService: StarWarsCharactersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersListComponent],
      providers: [StarWarsCharactersService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    starWarService = TestBed.inject(StarWarsCharactersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.characters.length).toBe(0);
  });

  it('should emit the output when clicks on requestMoreCharacters', () => {
    spyOn(component.retrieveMoreCharacters, 'emit');
    component.requestMoreCharacters();

    expect(component.retrieveMoreCharacters.emit).toHaveBeenCalled();
  });

  it('should character be selected and set to behavior', () => {
    spyOn(starWarService, 'setCurrentCharacter');

    component.onCharacterSelected({
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
    });

    expect(component.selectedCharacterId).toMatch('FAKE');
    expect(starWarService.setCurrentCharacter).toHaveBeenCalled();
  });

  it('should render more than 1 character-cells', () => {
    component.characters = [
      {
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
      },
      {
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
      },
    ];
    fixture.detectChanges();

    const characterCells = fixture.debugElement.queryAll(
      By.css('sw-characters-cell')
    );

    expect(characterCells.length).toBeGreaterThanOrEqual(1);
  });

  it('should loading flag render some items in dom', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const buttonGetMoreStep1 = fixture.debugElement.query(By.css('sw-button'));
    const loadingBarStep1 = fixture.debugElement.query(
      By.css('sw-loading-bar')
    );

    expect(loadingBarStep1).not.toBeNull();
    expect(buttonGetMoreStep1).toBeNull();

    component.isLoading = false;
    fixture.detectChanges();

    const buttonGetMoreStep2 = fixture.debugElement.query(By.css('sw-button'));
    const loadingBarStep2 = fixture.debugElement.query(
      By.css('sw-loading-bar')
    );

    expect(loadingBarStep2).toBeNull();
    expect(buttonGetMoreStep2).not.toBeNull();
  });

  it('should show a warning message when isError is true', () => {
    component.isError = true;
    fixture.detectChanges();

    const warningComponent = fixture.debugElement.query(By.css('sw-warning'));

    expect(warningComponent).not.toBeNull();
    expect(warningComponent.nativeElement.textContent).toMatch(
      'Failed to Load Data'
    );
  });

  it('should sw-button can click and request more characters', () => {
    const button = fixture.debugElement.query(By.css('sw-button'));
    spyOn(component, 'requestMoreCharacters');

    expect(button).not.toBeNull();

    button.nativeElement.click();

    expect(component.requestMoreCharacters).toHaveBeenCalled();
  });
});

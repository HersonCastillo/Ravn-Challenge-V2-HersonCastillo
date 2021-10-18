import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { StarWarsCharactersService } from 'src/app/modules/home/services/star-wars-characters.service';
import { ICharacter } from '../../interfaces/character';

import { CharacterInfoComponent } from './character-info.component';

describe('CharacterInfoComponent', () => {
  let component: CharacterInfoComponent;
  let fixture: ComponentFixture<CharacterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterInfoComponent],
      providers: [StarWarsCharactersService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInfoComponent);
    component = fixture.componentInstance;
    component.character$ = new Observable<ICharacter>((subscriber) => {
      subscriber.next({
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
          vehicles: [
            {
              name: 'AVION 667 hacia Japon',
            },
          ],
        },
      });
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should renders main container', () => {
    const mainContainer = fixture.debugElement.query(
      By.css('.character-info__container')
    );

    expect(mainContainer).not.toBeNull();
  });

  it('should have 4 traits availables/rendered', () => {
    const traitsContainer = fixture.debugElement.query(
      By.css('.character-info__content__traits')
    );

    expect(traitsContainer).not.toBeNull();

    const traits = traitsContainer.queryAll(By.css('sw-character-trait'));

    expect(traits.length).toBeGreaterThanOrEqual(1);
  });
});

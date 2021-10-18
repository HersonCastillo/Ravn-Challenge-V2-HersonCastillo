import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from 'src/app/graphql.module';
import { StarWarsCharactersService } from '../../services/star-wars-characters.service';

import { HomeLayoutComponent } from './home-layout.component';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;
  let starWarsService: StarWarsCharactersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLayoutComponent],
      providers: [StarWarsCharactersService, Apollo],
      imports: [HttpClientModule, GraphQLModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    starWarsService = TestBed.inject(StarWarsCharactersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should nav-bar/grid/characters-list exists', () => {
    const navBar = fixture.debugElement.query(By.css('sw-nav-bar'));
    const gridSystem = fixture.debugElement.query(
      By.css('sw-grid-layout-separation')
    );
    const charactersList = fixture.debugElement.query(
      By.css('sw-characters-list')
    );

    expect(navBar).not.toBeNull();
    expect(gridSystem).not.toBeNull();
    expect(charactersList).not.toBeNull();
  });

  it("it doesn't show sw-character-info if isError is true", () => {
    component.isError = true;
    fixture.detectChanges();

    const characterInfo = fixture.debugElement.query(
      By.css('sw-character-info')
    );

    expect(characterInfo).toBeNull();
  });
});

import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';
import { GraphQLModule } from 'src/app/graphql.module';
import { StarWarsCharactersService } from '../../services/star-wars-characters.service';

import { HomeLayoutComponent } from './home-layout.component';

describe('HomeLayoutComponent', () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLayoutComponent],
      providers: [StarWarsCharactersService, Apollo],
      imports: [HttpClientModule, GraphQLModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CharacterTraitComponent } from './character-trait.component';

describe('CharacterTraitComponent', () => {
  let component: CharacterTraitComponent;
  let fixture: ComponentFixture<CharacterTraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterTraitComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterTraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign label/value to html', () => {
    component.label = 'Eye Color';
    component.value = 'Green';
    fixture.detectChanges();

    const traitLabel = fixture.debugElement.query(
      By.css('.character-trait__content__label')
    );
    const traitValue = fixture.debugElement.query(
      By.css('.character-trait__content__value')
    );

    expect(traitLabel.nativeElement.textContent).toMatch('Eye Color');
    expect(traitValue.nativeElement.textContent).toMatch('Green');
  });

  it('should only show 1 <p> tag instead of two when label is undefined', () => {
    component.value = 'Beautiful car';
    fixture.detectChanges();

    const traitLabel = fixture.debugElement.query(
      By.css('.character-trait__content__label')
    );
    const traitValue = fixture.debugElement.query(By.css('.only-value'));

    expect(traitLabel).toBeNull();
    expect(traitValue.nativeElement).not.toBeNull();
    expect(traitValue.nativeElement.textContent).toMatch('Beautiful car');
  });
});

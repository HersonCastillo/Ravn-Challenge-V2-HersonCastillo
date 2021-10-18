import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GridLayoutSeparationComponent } from './grid-layout-separation.component';

describe('GridLayoutSeparationComponent', () => {
  let component: GridLayoutSeparationComponent;
  let fixture: ComponentFixture<GridLayoutSeparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridLayoutSeparationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLayoutSeparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should [first] diretive exists in component', () => {
    const container = fixture.debugElement.query(
      By.css('.grid-layout-separation__container__first-side')
    );

    expect(container).not.toBeNull();

    container.nativeElement.innerHTML = '<div first><div>';

    const content = container.query(By.css('[first]'));

    expect(content).not.toBeNull();
  });

  it('should [last] diretive exists in component', () => {
    const container = fixture.debugElement.query(
      By.css('.grid-layout-separation__container__last-side')
    );

    expect(container).not.toBeNull();

    container.nativeElement.innerHTML = '<div last><div>';

    const content = container.query(By.css('[last]'));

    expect(content).not.toBeNull();
  });
});

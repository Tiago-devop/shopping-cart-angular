import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { CHARACTER_GROUPS } from './characters';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Zombicide Helper');
  });

  it('should list all characters by default', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.roster__item');
    const totalCount = CHARACTER_GROUPS.reduce(
      (total, group) => total + group.characters.length,
      0,
    );
    expect(items.length).toBe(totalCount);
  });

  it('should list only owned boxes when "owned" is selected', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const select = fixture.nativeElement.querySelector('select') as HTMLSelectElement;
    select.value = 'owned';
    select.dispatchEvent(new Event('change'));
    await fixture.whenStable();
    const items = fixture.nativeElement.querySelectorAll('.roster__item');
    const ownedCount = CHARACTER_GROUPS.filter((group) => group.owned).reduce(
      (total, group) => total + group.characters.length,
      0,
    );
    expect(items.length).toBe(ownedCount);
  });
});

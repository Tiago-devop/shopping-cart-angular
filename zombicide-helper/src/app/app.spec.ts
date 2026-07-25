import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { App } from './app';
import { CHARACTER_GROUPS } from './characters';

const TOTAL_COUNT = CHARACTER_GROUPS.reduce(
  (total, group) => total + group.characters.length,
  0,
);

async function drawOnce(fixture: ReturnType<typeof TestBed.createComponent<App>>) {
  vi.useFakeTimers();
  try {
    fixture.componentInstance.drawCharacter();
    vi.advanceTimersByTime(80 * 12);
  } finally {
    vi.useRealTimers();
  }
  await fixture.whenStable();
}

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

  it('should include all packs in the pool by default', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.draw__pool-info')?.textContent).toContain(
      `${TOTAL_COUNT} sobreviventes`,
    );
    const toggles = compiled.querySelectorAll('.packs__toggle--active');
    expect(toggles.length).toBe(CHARACTER_GROUPS.length);
  });

  it('should remove a pack from the pool when toggled off', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const firstToggle = compiled.querySelector('.packs__toggle') as HTMLButtonElement;
    firstToggle.click();
    await fixture.whenStable();
    const expected = TOTAL_COUNT - CHARACTER_GROUPS[0].characters.length;
    expect(compiled.querySelector('.draw__pool-info')?.textContent).toContain(
      `${expected} sobreviventes`,
    );
  });

  it('should add drawn character to the drawn box and remove it from the pool', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    await drawOnce(fixture);
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.drawn__item');
    expect(items.length).toBe(1);
    const drawnName = items[0].textContent?.trim() ?? '';
    expect(compiled.querySelector('.draw__pool-info')?.textContent).toContain(
      `${TOTAL_COUNT - 1} sobreviventes`,
    );
    expect(compiled.querySelector('.draw__name')?.textContent).toContain(drawnName);
  });

  it('should clear drawn characters and restore the pool', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    await drawOnce(fixture);
    fixture.componentInstance.clearDrawn();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.drawn__item').length).toBe(0);
    expect(compiled.querySelector('.draw__pool-info')?.textContent).toContain(
      `${TOTAL_COUNT} sobreviventes`,
    );
  });
});

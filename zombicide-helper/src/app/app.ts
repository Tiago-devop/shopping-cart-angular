import { Component, computed, signal } from '@angular/core';
import { CHARACTER_GROUPS } from './characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly groups = CHARACTER_GROUPS;
  protected readonly activeBoxes = signal<ReadonlySet<string>>(
    new Set(CHARACTER_GROUPS.map((group) => group.box)),
  );
  protected readonly drawnCharacters = signal<string[]>([]);
  protected readonly spinningName = signal<string | null>(null);
  protected readonly isDrawing = signal(false);

  // Personagens dos packs ativos que ainda não foram sorteados.
  protected readonly pool = computed(() => {
    const active = this.activeBoxes();
    const drawn = new Set(this.drawnCharacters());
    return this.groups
      .filter((group) => active.has(group.box))
      .flatMap((group) => group.characters)
      .filter((character) => !drawn.has(character));
  });

  protected readonly lastDrawn = computed(
    () => this.drawnCharacters().at(-1) ?? null,
  );

  isBoxActive(box: string): boolean {
    return this.activeBoxes().has(box);
  }

  toggleBox(box: string): void {
    const next = new Set(this.activeBoxes());
    if (next.has(box)) {
      next.delete(box);
    } else {
      next.add(box);
    }
    this.activeBoxes.set(next);
  }

  selectAllBoxes(): void {
    this.activeBoxes.set(new Set(this.groups.map((group) => group.box)));
  }

  selectNoBoxes(): void {
    this.activeBoxes.set(new Set());
  }

  selectOwnedBoxes(): void {
    this.activeBoxes.set(
      new Set(this.groups.filter((group) => group.owned).map((group) => group.box)),
    );
  }

  clearDrawn(): void {
    this.drawnCharacters.set([]);
    this.spinningName.set(null);
  }

  drawCharacter(): void {
    if (this.isDrawing() || this.pool().length === 0) {
      return;
    }

    this.isDrawing.set(true);

    // Efeito de "roleta": troca o nome algumas vezes antes de parar no sorteado.
    const spins = 12;
    let count = 0;
    const interval = setInterval(() => {
      const name = this.randomFromPool();
      this.spinningName.set(name);
      count++;
      if (count >= spins) {
        clearInterval(interval);
        this.drawnCharacters.update((drawn) => [...drawn, name]);
        this.spinningName.set(null);
        this.isDrawing.set(false);
      }
    }, 80);
  }

  private randomFromPool(): string {
    const pool = this.pool();
    return pool[Math.floor(Math.random() * pool.length)];
  }
}

import { Component, computed, signal } from '@angular/core';
import { CHARACTER_GROUPS } from './characters';

type BoxFilter = 'all' | 'owned' | string;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly groups = CHARACTER_GROUPS;
  protected readonly selectedBox = signal<BoxFilter>('all');
  protected readonly drawnCharacter = signal<string | null>(null);
  protected readonly isDrawing = signal(false);

  protected readonly pool = computed(() => {
    const filter = this.selectedBox();
    const groups =
      filter === 'all'
        ? this.groups
        : filter === 'owned'
          ? this.groups.filter((group) => group.owned)
          : this.groups.filter((group) => group.box === filter);
    return groups.flatMap((group) => group.characters);
  });

  onBoxChange(value: string): void {
    this.selectedBox.set(value);
    this.drawnCharacter.set(null);
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
      this.drawnCharacter.set(this.randomCharacter());
      count++;
      if (count >= spins) {
        clearInterval(interval);
        this.isDrawing.set(false);
      }
    }, 80);
  }

  private randomCharacter(): string {
    const pool = this.pool();
    return pool[Math.floor(Math.random() * pool.length)];
  }
}

import { Component, signal } from '@angular/core';
import { ZOMBICIDE_CHARACTERS } from './characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly characters = ZOMBICIDE_CHARACTERS;
  protected readonly drawnCharacter = signal<string | null>(null);
  protected readonly isDrawing = signal(false);

  drawCharacter(): void {
    if (this.isDrawing()) {
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
    const index = Math.floor(Math.random() * this.characters.length);
    return this.characters[index];
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  email: string;
  role: 'admin' | 'client';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  get currentUser(): User | null {
    return this.currentUserSubject.value;
  }

  get isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  login(email: string, password: string): boolean {
    const mockUsers: Record<string, { password: string; user: User }> = {
      'admin@shop.com': {
        password: 'admin123',
        user: { name: 'Admin User', email: 'admin@shop.com', role: 'admin' },
      },
      'client@shop.com': {
        password: 'client123',
        user: { name: 'Client User', email: 'client@shop.com', role: 'client' },
      },
    };

    const found = mockUsers[email];
    if (found && found.password === password) {
      this.currentUserSubject.next(found.user);
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUserSubject.next(null);
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectGlobalLoading } from '../../../store/loading/loading.selectors';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent implements OnInit {
  private store = inject(Store);
  isLoading$!: Observable<boolean>;

  ngOnInit(): void {
    this.isLoading$ = this.store.select(selectGlobalLoading);
  }
}

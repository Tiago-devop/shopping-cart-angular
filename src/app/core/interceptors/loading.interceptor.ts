import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { finalize } from 'rxjs/operators';
import { hideLoading, showLoading } from '../../store/loading/loading.actions';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const store = inject(Store);

  store.dispatch(showLoading());

  return next(req).pipe(
    finalize(() => store.dispatch(hideLoading()))
  );
};

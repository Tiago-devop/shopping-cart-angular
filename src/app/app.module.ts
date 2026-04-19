import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { authReducer } from './store/auth/auth.reducer';
import { productsReducer } from './store/products/products.reducer';
import { cartReducer } from './store/cart/cart.reducer';
import { loadingReducer } from './store/loading/loading.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { ProductsEffects } from './store/products/products.effects';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      auth: authReducer,
      products: productsReducer,
      cart: cartReducer,
      loading: loadingReducer,
    }),
    EffectsModule.forRoot([AuthEffects, ProductsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    provideHttpClient(withInterceptors([loadingInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

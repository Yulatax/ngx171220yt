import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {ModalModule} from './modal/modal.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './store/effects/products.effects';
import {ProductsService} from './content/backoffice/content/products/products.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ModalModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

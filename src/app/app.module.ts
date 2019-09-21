import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlipCardComponent} from './flip-card/flip-card.component';
import {CardsContainerComponent} from './cards-container/cards-container.component';
import {CardsService} from './cards-container/cards.service';
import {MatGridListModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FlipCardComponent,
    CardsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

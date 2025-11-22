import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FairDashComponent } from './shared/component/fair-dash/fair-dash.component';
import { FairCardComponent } from './shared/component/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/component/fair-details/fair-details.component';
import { ProductDashComponent } from './shared/component/product-dash/product-dash.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { ProductCardsComponent } from './shared/component/product-cards/product-cards.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FairDashComponent,
    FairCardComponent,
    FairDetailsComponent,
    ProductDashComponent,
    ProductFormComponent,
    ProductCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

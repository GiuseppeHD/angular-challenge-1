import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderSummaryComponent } from './components/order-summary.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { PlanBoxComponent } from './components/plan-box/plan-box.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    CardHeaderComponent,
    CardBodyComponent,
    PlanBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

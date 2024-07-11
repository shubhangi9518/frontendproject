import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SampleReactiveFormComponent } from './sample-reactive-form/sample-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RadioButtonComponent,
    SampleReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

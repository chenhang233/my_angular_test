import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcomponentComponent } from './components/acomponent/acomponent.component';
import { BcomponentComponent } from './components/bcomponent/bcomponent.component';
import { NotFoundcomponentComponent } from './components/not-foundcomponent/not-foundcomponent.component';
import { CComponent } from './components/c/c.component';

@NgModule({
  declarations: [AppComponent, AcomponentComponent, BcomponentComponent, NotFoundcomponentComponent, CComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

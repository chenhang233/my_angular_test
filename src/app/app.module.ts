import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcomponentComponent } from './components/acomponent/acomponent.component';
import { BcomponentComponent } from './components/bcomponent/bcomponent.component';
import { NotFoundcomponentComponent } from './components/not-foundcomponent/not-foundcomponent.component';
import { CComponent } from './components/c/c.component';
import { HighLightDirective } from './directives/high-light.directive';
import { UnlessDirective } from './directives/unless.directive';
import { APP_CONFIG, APP_DI_CONFIG } from './app.config';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    AcomponentComponent,
    BcomponentComponent,
    NotFoundcomponentComponent,
    CComponent,
    HighLightDirective,
    UnlessDirective,
  ],
  imports: [ServicesModule, BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_CONFIG, useValue: APP_DI_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}

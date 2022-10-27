import { Injectable, Optional } from '@angular/core';
import { ServicesModule } from './services.module';

@Injectable({
  providedIn: ServicesModule,
})
export class MainService {
  constructor() {}
}

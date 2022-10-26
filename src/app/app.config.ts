import { InjectionToken } from '@angular/core';

export interface AppConfig {
  url: string;
  title: string;
}

export const APP_DI_CONFIG: AppConfig = {
  url: '123',
  title: 'title',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('appconfig');

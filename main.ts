import 'zone.js';

import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './src/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
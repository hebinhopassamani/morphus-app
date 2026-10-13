import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './apps/app.component';
import { config } from './apps/app.config.server';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);

export default bootstrap;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

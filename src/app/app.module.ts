import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionar FormsModule
  ],
  providers: [
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BuscaPipe } from './busca.pipe';
import { PaginaPipe } from './pagina.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuscaPipe,
    PaginaPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

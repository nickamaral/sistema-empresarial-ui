import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesModule } from './clientes/clientes.module';
import {HttpClientModule} from '@angular/common/http';
import { PipesModule } from './shared/pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PipesModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }

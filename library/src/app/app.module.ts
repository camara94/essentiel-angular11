import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { DeletespacePipe } from './deletespace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListLivresComponent,
    DeletespacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

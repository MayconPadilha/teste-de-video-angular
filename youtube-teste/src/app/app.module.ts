import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaVideosComponent } from './components/lista-videos/lista-videos.component';
import { CardVideoComponent } from './components/card-video/card-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVideosComponent,
    CardVideoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

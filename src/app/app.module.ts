import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';
import { GameComponent } from './game/game.component';
import { MovieComponent } from './movie/movie.component';

import { LoggingService } from './logging.service';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SampleComponent,
    MovieComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
   providers: [
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

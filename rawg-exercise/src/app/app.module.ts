import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesRootComponent } from './games/games-root/games-root.component';
import { DisplayComponent} from './games/display/display.component'
import { SearchComponent } from './games/search/search.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    GamesRootComponent,
    DisplayComponent,
    SearchComponent,
    DisplayComponent,
    GamesRootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

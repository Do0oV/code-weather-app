import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CityListComponent } from "./components/city-list/city-list.component";
import { CityListItemComponent } from "./components/city-list-item/city-list-item.component";
import { CityDetailsComponent } from "./components/city-details/city-details.component";
import { WeatherComponent } from "./containers/weather/weather.component";
import { DayComponent } from "./components/day/day.component";
import { HeaderComponent } from "./containers/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityListItemComponent,
    CityDetailsComponent,
    WeatherComponent,
    DayComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './containers/weather/weather.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';


const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'city/:cityId', component: CityDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


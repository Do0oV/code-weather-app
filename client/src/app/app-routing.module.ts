import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitiesComponent } from './containers/cities/cities.component';
import { CityDetailsComponent } from './components/city-details/city-details.component';


const routes: Routes = [
  { path: '', component: CitiesComponent },
  { path: 'city/:cityId', component: CityDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


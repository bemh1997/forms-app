import { Routes } from '@angular/router';
import { CountryPageComponent } from './pages/country-page.component/country-page.component';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default countryRoutes;

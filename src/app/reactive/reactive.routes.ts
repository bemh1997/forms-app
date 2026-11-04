import { Routes } from '@angular/router';
import { BasicPageComponent } from './pages/basic-page.component/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page.component/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page.component/switches-page.component';

const reactiveRoutes: Routes = [
  {
    path: 'basic',
    title: 'Básicos',
    component: BasicPageComponent,
  },
  {
    path: 'dynamic',
    title: 'Dinámicos',
    component: DynamicPageComponent,
  },
  {
    path: 'switches',
    title: 'Switches',
    component: SwitchesPageComponent,
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];

export default reactiveRoutes;

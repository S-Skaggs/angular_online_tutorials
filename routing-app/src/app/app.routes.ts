import { ResolveFn, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

// Create title for child-a
const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');

export const routes: Routes = [
  {
    path: 'first-component',
    loadChildren: () => [
      {
        path: '',
        title: 'First component',
        component: FirstComponent
      },
      {
        path: 'child-a', // child route path
        title: 'child a',
        component: ChildAComponent // child route component that the route renders
      },
      {
        path: 'child-b', // child route path
        title: 'child b',
        component: ChildBComponent // child route component that the route renders
      }
    ]
  }, // path to FirstComponent, // path to FirstComponent
  { path: 'second-component', title: 'Second component', component: SecondComponent }, // path to SecondComponent
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to FirstComponent
  { path: '**', title: 'Page not found', component: PageNotFoundComponent } // wildcard route to PageNotFoundComponent
];

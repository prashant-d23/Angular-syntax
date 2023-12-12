import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { UserProfileComponent } from './user-profile.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '', // Normal route with empty path (root route)
    component: HomeComponent, // Component for the root route
  },
  {
    path: 'about', // Normal route with path '/about'
    component: AboutComponent, // Component for '/about'
  },
  {
    path: 'contact', // Normal route with path '/contact'
    component: ContactComponent, // Component for '/contact'
  },
  {
    path: 'user/:id', // Route with a path parameter 'id'
    component: UserProfileComponent, // Component for '/user/:id'
  },
  {
    //load component inside compoenent 
    path: 'admin', // Parent route with child routes
    children: [
      {
        path: '', // Empty route for '/admin'
        component: AdminDashboardComponent, // Component for '/admin'
      },
      {
        path: 'settings', // Child route for '/admin/settings'
        component: AdminSettingsComponent, // Component for '/admin/settings'
      },
    ],
  },
  {
    path: 'lazy', // Lazy-loaded module using loadChildren
    loadChildren: () =>
      import('./lazy.module').then((m) => m.LazyModule),
  },
  {
    path: '**', // Wildcard route for handling unknown routes
    component: NotFoundComponent, // Component for unknown routes
  },
  //two router outlets
  { path: 'page1', component: Page1Component, outlet: 'primaryOutlet' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

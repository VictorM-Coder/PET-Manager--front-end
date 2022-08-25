import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./my-forms/my-forms.module').then(m => m.MyFormsModule)
  },
  {
    path: 'pet',
    loadChildren: () => import('./my-forms/my-forms.module').then(m => m.MyFormsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-monsters',
    loadChildren: () => import('./my-monsters/my-monsters.module').then( m => m.MyMonstersPageModule)
  },
  {
    path: 'my-monsters-get-delete',
    loadChildren: () => import('./my-monsters-get-delete/my-monsters-get-delete.module').then( m => m.MyMonstersGetDeletePageModule)
  },
  {
    path: 'my-monsters-create',
    loadChildren: () => import('./my-monsters-create/my-monsters-create.module').then( m => m.MyMonstersCreatePageModule)
  },
  {
    path: 'my-monsters-update/:id',
    loadChildren: () => import('./my-monsters-update/my-monsters-update.module').then( m => m.MyMonstersUpdatePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

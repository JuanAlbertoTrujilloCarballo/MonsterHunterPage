import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMonstersUpdatePage } from './my-monsters-update.page';

const routes: Routes = [
  {
    path: '',
    component: MyMonstersUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMonstersUpdatePageRoutingModule {}

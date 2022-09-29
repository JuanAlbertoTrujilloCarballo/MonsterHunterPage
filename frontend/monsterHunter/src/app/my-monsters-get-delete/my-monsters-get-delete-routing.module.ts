import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMonstersGetDeletePage } from './my-monsters-get-delete.page';

const routes: Routes = [
  {
    path: '',
    component: MyMonstersGetDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMonstersGetDeletePageRoutingModule {}

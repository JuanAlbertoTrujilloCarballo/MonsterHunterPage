import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMonstersCreatePage } from './my-monsters-create.page';

const routes: Routes = [
  {
    path: '',
    component: MyMonstersCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMonstersCreatePageRoutingModule {}

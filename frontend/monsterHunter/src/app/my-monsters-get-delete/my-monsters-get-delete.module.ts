import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMonstersGetDeletePageRoutingModule } from './my-monsters-get-delete-routing.module';

import { MyMonstersGetDeletePage } from './my-monsters-get-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMonstersGetDeletePageRoutingModule
  ],
  declarations: [MyMonstersGetDeletePage]
})
export class MyMonstersGetDeletePageModule {}

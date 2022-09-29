import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMonstersCreatePageRoutingModule } from './my-monsters-create-routing.module';

import { MyMonstersCreatePage } from './my-monsters-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyMonstersCreatePageRoutingModule
  ],
  declarations: [MyMonstersCreatePage]
})
export class MyMonstersCreatePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMonstersUpdatePageRoutingModule } from './my-monsters-update-routing.module';

import { MyMonstersUpdatePage } from './my-monsters-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MyMonstersUpdatePageRoutingModule
  ],
  declarations: [MyMonstersUpdatePage]
})
export class MyMonstersUpdatePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./main-page.component";
import {MainMenuModule} from "../main-menu/main-menu.module";



@NgModule({
  declarations: [MainPageComponent],
  exports:[MainPageComponent],
  imports: [
    CommonModule,
    MainMenuModule
  ]
})
export class MainPageModule { }

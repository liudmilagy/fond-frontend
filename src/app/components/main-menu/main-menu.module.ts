import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from "primeng/menubar";
import {MainMenuComponent} from "./main-menu.component";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    MainMenuComponent
  ],
  exports: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    ButtonModule
  ]
})
export class MainMenuModule { }

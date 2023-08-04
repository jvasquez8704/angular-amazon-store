import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './components/menubar/menubar.component';



@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarComponent
  ]
})
export class SharedModule { }

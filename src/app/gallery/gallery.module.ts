import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { HomePage } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { RatingStarsPipe } from './components/card/rating-stars.pipe';



@NgModule({
  declarations: [
    HomePage,
    GridComponent,
    ListComponent,
    CardComponent,
    RatingStarsPipe
  ],
  imports: [
    CommonModule,

    SharedModule
  ],
  exports:[
    HomePage,
  ]
})
export class GalleryModule { }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'gallery-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public application: any = {};


  @Input()
  public rating: number = 0;


}

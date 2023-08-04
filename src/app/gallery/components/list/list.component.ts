import { Component, Input } from '@angular/core';
import { AppService } from 'src/app/gallery/service/app.service';

@Component({
  selector: 'category-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private appService:AppService) {}

  @Input()
  public categories: any[] = [];


  changed(value: string) {
    this.appService.searchAppsByCategory(value);
  }

}

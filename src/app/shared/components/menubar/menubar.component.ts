import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppService } from 'src/app/gallery/service/app.service';

@Component({
  selector: 'shared-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  @ViewChild('searchInput')
  public searchInput!: ElementRef<HTMLInputElement>

  constructor( private service: AppService) {}

  searchFc(){
    const key = this.searchInput.nativeElement.value;
    this.service.searchAppsByKey(key);
    this.searchInput.nativeElement.value = '';
  }
}

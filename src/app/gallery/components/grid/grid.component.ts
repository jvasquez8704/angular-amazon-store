import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gallery-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Output()
  public selectedApp: EventEmitter<any> = new EventEmitter();


  @Input()
  public apps: any[] = [];
  
  @Input()
  public modalCaller: any;

  selectApp(app: any): void {
   this.selectedApp.emit(app);
  }

}

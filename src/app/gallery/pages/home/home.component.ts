import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePage implements OnInit {

   private _app: any = {};

  constructor( private appService: AppService) { 
    this.appService.fetchCategories();
  }

  ngOnInit(): void {
    this.appService.loadApps();
  }

  get apps(): any[] {
    return (this.appService.appList || []).map( app => {
      if(app?.price < 0.5 ) {
        return {
          ...app,
          price: 'FREE'
        }
      }
      return app;
    });
  }

  get categories(): any[] {
    return this.appService.categoryList;
  }

  getEmmiter(content: any): any {
    this._app = content;
  }

  get application(): any {
    return this._app;
  }

  get rate(): any {
    return this._app.rate || 0;
  }

}

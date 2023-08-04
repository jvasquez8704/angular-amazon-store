import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public appList: any[] = [];
  public categoryList: any[] = [];

  private serviceUrl:   string = 'http://localhost:8080';
  constructor( private http: HttpClient ) { }

  loadApps():void {
    this.http.get<any>(`${ this.serviceUrl }/applications`)
      .subscribe( resp => {

        this.appList = resp;

      });
  }

  searchAppsByKey( key: string ):void {
    if ( key.length === 0 ) return;

    this.http.get<any>(`${ this.serviceUrl }/applications`)
      .subscribe( resp => {

        this.appList = resp;

      });

  }
  
  fetchCategories():void {

    this.http.get<any>(`${ this.serviceUrl }/categories`)
      .subscribe( resp => {
        this.categoryList = resp;
      });

  }

  searchAppsByCategory( categoryId: string ):void {
    if ( categoryId === '' || categoryId === null || categoryId === undefined) return;

    this.http.get<any>(`${ this.serviceUrl }/applications/category/${ categoryId }`)
      .subscribe( resp => {

        this.appList = resp;

      });

  }
}

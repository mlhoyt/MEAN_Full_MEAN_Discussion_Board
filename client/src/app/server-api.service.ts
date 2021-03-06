import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServerApiService {
  constructor(
    private _http: Http
  )
  {}

  login( name ) {
    return this._http.post( '/actions/login', { name: name } )
      .map( data => data.json() )
      .toPromise();
  }

  logout() {
    return this._http.get( '/actions/logout' )
      .map( data => data.json() )
      .toPromise();
  }

  // create( item ) { return this._http.post( '{{URL}}', item ) .map( data => data.json() ) .toPromise(); }
  // read_all() { return this._http.get( '{{URL}}' ) .map( data => data.json() ) .toPromise(); }
  // read_one( pk ) { return this._http.get( '{{URL}}/' ) .map( data => data.json() ) .toPromise(); }
  // update( item, pk ) { return this._http.put( '{{URL}}/', item ) .map( data => data.json() ) .toPromise(); }
  // delete( pk ) { return this._http.delete( '{{URL}}/' ) .map( data => data.json() ) .toPromise(); }
}

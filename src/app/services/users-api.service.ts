import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../models/usuario";
import { UsuarioData } from "../models/usuario-data";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService
{

  private _host: string = '';

  constructor( private httpClient: HttpClient ) { }

  setHost( newHost: string )
  {
      this._host = newHost;
  }

  index()
  {
    return this.httpClient.get( this._host );
  }

  store( user: Usuario )
  {
    let data: UsuarioData = new UsuarioData( user );
    return this.httpClient.post( this._host, data );
  }

  update( user: Usuario )
  {
    let data: UsuarioData = new UsuarioData( user );
    data.usuario = undefined;
    return this.httpClient.put( this._host+user.id, data );
  }

  destroy( id: number )
  {
    return this.httpClient.delete( this._host+id );
  }

}

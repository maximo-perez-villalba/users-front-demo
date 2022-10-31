import { Component, OnInit } from '@angular/core';
import { Usuario } from "./models/usuario";
import { UsersApiService } from "./services/users-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public usuarios: Usuario[];

  public selected: Usuario;

  public accion: string;

  public mensaje: string;

  public hayError: boolean;

  public estaActualizado: boolean;

  constructor( private apiClient: UsersApiService )
  {
    this.usuarios = [];
    this.selected = new Usuario();
    this.accion = 'crear';
    this.hayError = false;
    this.mensaje = '';
    this.estaActualizado = false;

    apiClient.setHost( 'http://alquilando-backend.test/api/users/' );
  }

  ngOnInit(): void
  {
    this.cargarListado();
  }

  cargarListado(){
    this.apiClient.index().subscribe(
      ( response: any ) => {
        this.usuarios = response;
      },
      ( error ) => { console.error( error ); }
    );
  }

  select( usuario: Usuario )
  {
    this.hayError = false;
    this.accion = 'editar';
    this.selected = usuario;
    this.estaActualizado = false;
  }

  controlNuevo()
  {
    this.hayError = false;
    this.accion = 'crear';
    this.selected = new Usuario();
    this.estaActualizado = false;
  }

  guardar()
  {
    this.apiClient.store( this.selected ).subscribe(
      ( response: any ) => {
        this.controlNuevo();
        this.cargarListado();
      },
      ( error ) => {
        this.hayError = true;
        this.mensaje = error.error.message;
       }
    );
  }

  actualizar()
  {
    this.apiClient.update( this.selected ).subscribe(
      ( response: any ) => {
        this.cargarListado();
        this.estaActualizado = true;
        this.mensaje = response.mensaje;
      },
      ( error ) => {
        this.estaActualizado = false;
        this.hayError = true;
        this.mensaje = error.error.message;
       }
    );
  }

  borrar()
  {
    this.apiClient.destroy( this.selected.id ).subscribe(
      ( response: any ) => {
        this.controlNuevo();
        this.cargarListado();
      },
      ( error ) => {
        this.hayError = true;
        this.mensaje = error.error.message;
       }
    );
  }

}

import { Usuario } from './usuario';

export class UsuarioData
{
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  usuario: string | undefined;

  constructor( user: Usuario )
  {
    this.nombre = user.nombre;
    this.apellido = user.apellido;
    this.email = user.email;
    this.usuario = user.usuario;
  }
}

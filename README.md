# Users Frontend
Frontend. Implementación en angular del cliente de API RESTfull sobre el recurso 'users'. 

## Contexto de implementación
 - NodeJs 14.15.1
 - Angular 11.0.3
 - Typescript 4.0.5
 - VSCode 1.51.1

## Traza de implementación
```
ng new users-front-demo
npm install bootstrap
ng g class models/usuario
ng g class models/usuario-data
ng g service services/users-api
```

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

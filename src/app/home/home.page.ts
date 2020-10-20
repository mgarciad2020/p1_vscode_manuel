import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  

})
export class HomePage {
  
  name = 'Manuel García Díaz';
  url = 'https://www.google.es';
  activo = false;
  poblacion = 'Bolaños';
  codigopostal = '13260';
  personas =[
    {
      nombre: 'Manuel',
      apellidos:'García',
      DNI: '05739245D'
    },
    {
      nombre: 'Miguel',
      apellidos: 'García',
      DNI: '05739246X'
    }
  ];

elementos = [
  {
    icono: 'chatbubble-outline',
    ruta:  '/pag1',
    titulo: 'Pagina1'
  },
  {
    icono: 'chatbubble-outline',
    ruta:  '/pag2',
    titulo: 'Pagina2'
  },
  {
    icono: 'chatbubble-outline',
    ruta:  '/pag3',
    titulo: 'Pagina3'
  }
];
  constructor() {}
  ngOnInit() {
  } 

 
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Actividad-13';
  data: Array<any> = [
    {
      apellido: 'Arcila',
      Casado: false,
      Direccion: 'Calle 35 43',
      Nombre: 'Juan',
      Telefono: '1234567',
    },
    {
      apellido: 'Bueno',
      Casado: false,
      Direccion: 'Calle 34353',
      Nombre: 'Kevin',
      Telefono: '43546',
    },
    {
      apellido: 'Palomino',
      Casado: false,
      Direccion: 'Calle w323',
      Nombre: 'Natalia',
      Telefono: '4353423',
    },
  ];
}

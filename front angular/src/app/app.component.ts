import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front angular';
  menbers = [
    {
      Name: 'Member 01',
      id: 1,
      surname: 'Ciclano',
      photo: 'http://www.minhaapp.com/photo1',
    },
    {
      Name: 'Member 02',
      id: 2,
      surname: 'Beltrano',
      photo: 'http://www.minhaapp.com/photo2',
    },
    {
      Name: 'Member 03',
      id: 3,
      surname: 'Fulano',
      photo: 'http://www.minhaapp.com/photo3',
    },
  ];
  constructor(private api: ApiService) {
    this.getMembers();
  }
  // buscar dados da api
  getMembers = () => {
    this.api.getAllMembers().subscribe(
      (data) => {
        // mombers nome da tabela no banco
        this.menbers = data;
      },
      (error) => {
        console.log('Aconteceu um erro');
      }
    );
  };
}

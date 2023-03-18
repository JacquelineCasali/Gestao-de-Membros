import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css'],
})
export class MembersDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}
  selected_menber = { id: '', name: '', surname: '', phone: '' };
  selected_id: any;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id')!);
      this.selected_id = id;
      this.loadMenber(id);
    });
  }
  // metodo get - mostrar na tela
  loadMenber(id: any) {
    this.api.getMember(id).subscribe(
      (data) => {
        // mombers nome da tabela no banco
        console.log(data);
        this.selected_menber = data;
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }
  // metodo PUT- atualizar
  update() {
    this.api.updateMember(this.selected_menber).subscribe(
      (data) => {
        // mombers nome da tabela no banco

        console.log(data);
        this.selected_menber = data;
      },
      (error) => {
        console.log('Aconteceu um erro', error.message);
      }
    );
  }

  newMember() {
    this.router.navigate(['new-member']);
  }
}

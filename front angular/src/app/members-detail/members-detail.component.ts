import { Component,OnInit } from '@angular/core';
import{ActivatedRoute, ParamMap} from '@angular/router'
import { ApiService } from './api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {
 

  constructor(private route: ActivatedRoute , private api: ApiService){}
  selected_menber = {  name: '', surname: '' };
  selected_id:any ;
  // id : any;
  ngOnInit(){
    this.route.paramMap.subscribe((param:ParamMap)=>{
      const id = parseInt(param.get('id')!);
      this.selected_id=id;
      this.loadMenber(id)
    })
  
   
  }
  loadMenber(id:any){
   
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
    };
  }
  // this.api.getMember(Menber.id).subscribe(
  //   (data) => {
  //     // mombers nome da tabela no banco
  //     console.log(data);
  //     this.selected_menber = data;
  //   },
  //   (error) => {
  //     console.log('Aconteceu um erro', error.message);
  //   }
  // );
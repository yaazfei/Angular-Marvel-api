import { Component, OnInit } from '@angular/core';
import { PersonagensApiService } from './personagem/shared/personagens-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {

  constructor(private personagemSvc: PersonagensApiService) { }
  allPersonagens : Observable<any>; //Interface
  
  ngOnInit(): void {
    this.getPersonagens();
  }

  getPersonagens() {
    this.allPersonagens = this.personagemSvc.getAllPersonagens();
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonagensApiService } from '../personagem/shared/personagens-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personagem-detalhes',
  templateUrl: './personagem-detalhes.component.html',
  styleUrls: ['./personagem-detalhes.component.css']
})
export class PersonagemDetalhesComponent implements OnInit {
  personagem: any = {};

  constructor(private personagemSvc: PersonagensApiService, private router: Router) {


    if (this.router.getCurrentNavigation().extras?.state != null) {
      this.personagem = this.router.getCurrentNavigation().extras.state;
      console.log (this.personagem);
    }

  }
  
  ngOnInit(): void {
    
  }


  
}



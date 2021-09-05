import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})

export class PersonagemComponent implements OnInit {

  @Input()personagem: any;

  constructor(private router:Router){
  }
  openDetalhes(pagename: string, personagem: any):void{
  this.router.navigate([`${pagename}`], {
    state: personagem, replaceUrl: true });

  }

  ngOnInit(): void {

  }

}

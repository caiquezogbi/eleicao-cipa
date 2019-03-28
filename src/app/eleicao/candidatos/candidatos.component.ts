import { Component, OnInit } from '@angular/core';
import { EleicaoService } from '../eleicao.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss'],
})
export class CandidatosComponent implements OnInit {

  candidatos: any[] = [];

  constructor(private cands: EleicaoService) { }

  ngOnInit() {
    this.loadCandidatos();
  }

  cardClick(valor){
    
    alert('clicou em: '+ valor.nome);
  }

  // carregar(){
  //   this.candidatos = [
  //     {nome :'caique zogbi', setor:'senai', imagem:'https://www.mobafire.com/images/avatars/draven-classic.png'},
  //     {nome :'draven', setor:'bot', imagem:'https://www.mobafire.com/images/avatars/draven-classic.png'},
  //     {nome :'veigar', setor:'mid', imagem:'https://www.mobafire.com/images/avatars/draven-classic.png'}
  //   ];
  // }

  loadCandidatos(){
    this.candidatos = this.cands.getCandidatos();
  }

}

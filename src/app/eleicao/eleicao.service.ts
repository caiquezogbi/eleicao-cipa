import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EleicaoService {

  private _candidatos: any [] = [];

  constructor() { 
    const _temp = localStorage.getItem('candidatos');
    this._candidatos = _temp ? JSON.parse(_temp) : [];

  }

  getCandidatos(): candidato[]{
    return this._candidatos;
  }

  getUmCandidato(index): candidato{
   return this._candidatos[index]
  }

  addCandidato(candidato: candidato): void{
   this._candidatos.push(candidato)
   this.saveLocal();
  }

  saveCandidato(candidato: candidato, index: number){
    this._candidatos[index] = candidato;
    this.saveLocal();
  }

  private saveLocal(){ //metodo para salvar
    localStorage.setItem('candidatos', JSON.stringify(this._candidatos));
  }
}

export class candidato{

  nome: string;
  setor: string;
  imagem: string;
  votos?: number = 0;

  constructor(_nome:string, _setor:string, _imagem:string) {
    this.nome = _nome;
    this.setor = _setor;
    this.imagem = _imagem;
  }
}

  
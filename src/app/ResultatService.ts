import { Injectable } from '@angular/core';
import {resultat} from '../assets/data/resultat.json'


@Injectable({
  providedIn: 'root',
})
export class ResultatService {
  private nombreDeCas:any []= resultat;

  getAll():any[]{
  return this.nombreDeCas;
  }

  getTopEnfant():any[]{
  let top:any[]=[];
  let i : number = 0;
  for(let local of this.nombreDeCas){
  if(local.enfant > local.adulte && local.enfant > local.aine){
  top[i]=local;
  i=i+1;
  }
  }
   return (top);
  }  
}
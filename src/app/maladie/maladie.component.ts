import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maladie',
  templateUrl: './maladie.component.html',
  styleUrls: ['./maladie.component.css']
})
export class MaladieComponent implements OnInit {

siteLocale:string;
 
 
  constructor() {}


  ngOnInit(): void {
  }

 
  cheminUrl(){
  this.siteLocale = window.location.pathname.split('/')[1];
  if(this.siteLocale==="en"){
  return false;
  }else{
  return true;
  }
}

}


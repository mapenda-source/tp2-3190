import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {
  affiche:any;

  nom = new FormControl('' , Validators.required);
  prenom = new FormControl('' , Validators.required);
  email = new FormControl('' , Validators.required);
  numeroDeCarte = new FormControl('' , Validators.required);
  telephone = new FormControl('' , Validators.required);
  secteur = new FormControl('' , Validators.required);
  communication = new FormControl('' , Validators.required);

	 onSubmit(){
	 this.affiche=true;
	 }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms'
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {
affiche:any
 constructor() { }

  ngOnInit(): void {
  
  }

loginForm = new FormGroup( {
  nom : new FormControl('' , [Validators.required,Validators.maxLength(24)]),
  prenom : new FormControl('mapy' , [Validators.required,Validators.maxLength(24)]),
  email : new FormControl('' , [Validators.required,Validators.email]),
  numeroDeCarte : new FormControl('' , Validators.required),
  telephone : new FormControl('' , Validators.required),
  secteur : new FormControl('' , Validators.required),
  communication : new FormControl('' , Validators.required)
 })

	 onFormSubmit(){
	 this.affiche=true;
	 }



}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {
  nom = new FormControl('');
  prenom = new FormControl('');
  email = new FormControl('');
  numeroDeCarte = new FormControl('');
  telephone = new FormControl('');
  secteur = new FormControl('');
  communication = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

}

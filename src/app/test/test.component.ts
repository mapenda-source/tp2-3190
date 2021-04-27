import { Component, OnInit , ViewChild } from '@angular/core';

import {ResultatService} from '../ResultatService'

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  

  dataSource =new MatTableDataSource<any>(this.getAll());
  
  constructor(private resultatService: ResultatService){}


  @ViewChild(MatPaginator , {static:true}) paginator: MatPaginator;
  @ViewChild(MatSort , {static:true}) sort: MatSort;

  ngOnInit(): void {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  }


  getAll(){
  return this.resultatService.getAll();
  }


  getTopEnfant(){
  return this.getTopEnfant();
  }

   


  displayedColumns: string[] = [ 'localite', 'total', 'enfant' , 'adulte' , 'aine'];
  

applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}

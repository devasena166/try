import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

interface employee{
  value:string;
  value1:string;
}
@Component({
  selector: 'app-view-specific-users',
  templateUrl: './view-specific-users.component.html',
  styleUrls: ['./view-specific-users.component.css']
})



export class ViewSpecificUsersComponent implements OnInit {
  selectedValue: any;
  
  public employee=[
    {value1: 1, value: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {value1: 2, value: 'Helium', weight: 4.0026, symbol: 'He'},
    {value1: 3, value: 'Lithium', weight: 6.941, symbol: 'Li'},
    {value1: 4, value: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {value1: 5, value: 'Boron', weight: 10.811, symbol: 'B'},
    {value1: 6, value: 'Carbon', weight: 12.0107, symbol: 'C'},
    {value1: 7, value: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {value1: 8, value: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {value1: 9, value: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {value1: 10, value: 'Neon', weight: 20.1797, symbol: 'Ne'},
    
  ];
  
  
  constructor() { }

  ngOnInit(){
  
  }
  
   }


  

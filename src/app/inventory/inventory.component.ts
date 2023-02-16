import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {map } from 'rxjs';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  plushData = [{
    'creator':'',
    'name':''
  }];
  plushHeader:string[] = ['Creator', 'Name'];
  
  constructor( private http:HttpClient ){}

  ngOnInit(){
    this.http.get<any>('https://infra-hulling-376212-default-rtdb.europe-west1.firebasedatabase.app/plushies.json')
    .pipe(
        map(
            data => {
              let newData :any[]=[];
              Object.entries(data).forEach(([key,value]) => {newData.push(value)})
              return newData;
            }
        )
    )
    .subscribe((data:any[]) => {this.plushData = data; console.log(this.plushData) });
    
  }


}

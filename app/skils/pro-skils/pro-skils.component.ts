import { Component, OnInit } from '@angular/core';
import { Animal, Personne } from '../skilsInterfaces';
import { SkilsService } from '../skils.service';



@Component({
  selector: 'app-pro-skils',
  templateUrl: './pro-skils.component.html',
  styleUrls: ['./pro-skils.component.scss']
})
export class ProSkilsComponent implements OnInit{
  
  showCard:boolean=false;
  user:Personne={};
  
  constructor() { }


  ngOnInit(): void {
    console.log("bonjour oninit");
  }


  showCardFn() {
    this.showCard=true;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  items: Array<String>;

  constructor() {
    this.items = new Array();
    for(let i = 0; i < 100; i++){
      this.items.push(this.generateName());
    } 
  }

  protected generateName():string{
    const chars = "abcçdefgğhıijklmnoöprsştuüvyz";
    let name = "";
    let surname = "";
    
    for(let i = 0;i< this.getRandomInt(8) + 2; i++)
    { 
      name += chars[this.getRandomInt(28)];
    }
    for(let i = 0;i< this.getRandomInt(8) + 2; i++)
    { 
      surname += chars[this.getRandomInt(28)];
    }
    return name+" "+surname;
  }

  protected getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public photos=[];
  constructor() {
    this.photos=[
      {
        name:'Foto 1',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi?',
        url:'https://picsum.photos/id/1020/200/300'
      },
      {
        name:'Foto 2',
        description:'JAJAJ ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi?',
        url:'https://picsum.photos/id/1021/200/300'
      },
      {
        name:'Foto 3',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, excepturi?',
        url:'https://picsum.photos/id/1022/200/300'
      }
  ];
  }

}

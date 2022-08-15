import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public mainMenu: {
    defaultOptions: Array<any>, 
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] };

  public customOptions: Array<any> = [];

  constructor(public _multimediaService: MultimediaService) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'home',
        router: ['/tracks'],
      },
      {
        name: 'Search',
        icon: 'search',
        router: ['/history'],
      },
      {
        name: 'Your Library',
        icon: 'library',
        router: ['/favorites'],
      }
    ];

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical',
      }
    ];

    this.customOptions = [
      {
        name: 'Mi lista 1',
        router: ['/']
      },
      {
        name: 'Mi lista 2',
        router: ['/']
      },
      {
        name: 'Mi lista 3',
        router: ['/']
      },
      {
        name: 'Mi lista 4',
        router: ['/']
      }
    ];
  }

}

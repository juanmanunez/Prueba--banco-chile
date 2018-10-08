import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Detalle de cliente - información';
  numerotoken = '001';

  constructor() { }

  ngOnInit() {
  }

  getHeroes(): void {

  }
}

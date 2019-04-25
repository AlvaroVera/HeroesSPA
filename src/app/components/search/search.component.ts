import { Component, OnInit } from '@angular/core';

import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroService: HeroesService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(params => {
      this.heroes = this._heroService.buscarHeroes(params['termino']);
    });
  }

  ngOnInit() {
  }

}

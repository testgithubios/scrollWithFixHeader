import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	
	color = 'yellow';
    hero: Hero = {
	    id: 1,
	    name: 'Windstorm'
	  };
	  heroes = [];
	  selectedHero: Hero;
	  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeroes();
  }
  
  onSelect( hero: Hero ): void {
      this.selectedHero = hero;
  }
  getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }
  
  onSubmit() {
      alert(this.hero.id);
    }
}

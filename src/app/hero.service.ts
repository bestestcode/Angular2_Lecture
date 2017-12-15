import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() {
    return HEROES;
  }
}

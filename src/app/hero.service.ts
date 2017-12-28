import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './Hero';
import { MessagesService } from './messages.service';

@Injectable()
export class HeroService {

  constructor(public messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('fetched heroes');
    return of(HEROES);
  }
}

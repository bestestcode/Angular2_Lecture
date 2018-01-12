import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HEROES } from './mock-heros';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './Hero';
import { MessagesService } from './messages.service';

@Injectable()
export class HeroService {

  constructor(private http: HttpClient,
    private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('fetched heroes');
    return of(HEROES);
  }

  getHero(id): Observable<Hero> {
    this.messageService.add(`fetched hero: , ${id}`);
    return of(HEROES.find(hero => hero.id == id));
  }
}

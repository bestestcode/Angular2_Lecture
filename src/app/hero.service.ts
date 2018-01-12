import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './Hero';
import { MessagesService } from './messages.service';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');

    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // getHero(id): Observable<Hero> {
  //   this.log(`fetched hero: , ${id}`);
  //   return of(HEROES.find(hero => hero.id == id));
  // }

  log(message: String) {
    this.messageService.add(message);
  }
}

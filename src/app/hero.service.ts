import { Injectable } from '@angular/core';
import {HEROES} from './heroes/mock-heros';
import {Hero} from './heroes/hero';
import {observable,of, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Observable<Hero[]> {
    return of(HEROES);
  }

  constructor() { }
}

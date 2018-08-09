import { Injectable } from '@angular/core';
import {HEROES} from './heroes/mock-heros';
import {Hero} from './heroes/hero';
import {observable,of, Observable} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes():Observable<Hero[]> {
    this.messageService.add('HeroService:Fetched heroes');
    return of(HEROES);
  }

  constructor(private messageService:MessageService) { }
}

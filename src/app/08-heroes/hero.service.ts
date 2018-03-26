import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { DataApiService } from '../core/services/data-api.service';

@Injectable()
export class HeroesService extends DataApiService<Hero> {
  getUrl(): string {
    return '/api/heroes';
  }
}

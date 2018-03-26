import { Injectable } from '@angular/core';

import { RealEstate } from './real-estate.model';
import { DataApiService } from '../core/services/data-api.service';

@Injectable()
export class RealEstatesService extends DataApiService<RealEstate> {
  getUrl(): string {
    return '/api/real-estates';
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RealEstate } from './real-estate.model';
import { RealEstatesService } from './real-estates.service';

@Injectable()
export class ManageRealEstatesService {

  selectedRealEstate: RealEstate = null;
  realEstates$: BehaviorSubject<RealEstate[]> = new BehaviorSubject([]);

  constructor(private estatesServce: RealEstatesService) {
  }

  fetch() {
    this.estatesServce.getAll().subscribe((realEstates: RealEstate[]) => {
      this.realEstates$.next(realEstates);
    });
  }

  toggleRealEstate(estate: RealEstate) {
    // TODO
  }
}

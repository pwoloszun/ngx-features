import { Component, OnInit } from '@angular/core';

import { RealEstate } from '../real-estate.model';
import { ManageRealEstatesService } from '../manage-real-estates.service';
import { MetaData } from '../../shared/data-table/meta-data';

@Component({
  selector: 'nts-real-estates',
  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.css']
})
export class RealEstatesComponent implements OnInit {

  listHeaders: MetaData[];

  constructor(public service: ManageRealEstatesService) {
  }

  ngOnInit() {
    this.listHeaders = [
      {value: 'street', text: 'Ulica'},
      {value: 'lat', text: 'Wysokosc geo.'},
      {value: 'lng', text: 'Dlugosc geo.'},
    ];
    this.service.fetch();
  }

  onRealEstateClick(realEstate: RealEstate) {
    console.log('RE clicked:', realEstate);
    this.service.toggleRealEstate(realEstate);
  }

}

import {
  Component,
} from '@angular/core';

import { SimpleGMap } from './simple-gmap';
import { Marker } from './marker';
import { LatLng } from './lat-lng';

// TODO 1a: @ViewChild('xxx') myEl: ElementRef;
// TODO 1b: this.gmap = new SimpleGMap(this.myEl.nativeElement);

// TODO 2a: const gMarker: Marker = this.gmap.createMarker(marker);
// TODO 2b: ngOnChanges(changes: SimpleChanges)

// TODO 3:

@Component({
  selector: 'nts-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
}

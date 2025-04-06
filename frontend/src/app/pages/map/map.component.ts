import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

ngOnInit(){
  const map = L.map('map').setView([43.6, 3.9], 8); // Autour de la Camargue

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([43.6, 3.9]).addTo(map).bindPopup('Flamants roses ici !');
}

export class MapComponent {

}

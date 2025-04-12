import { Component, AfterViewInit } from '@angular/core';
import type { LatLngTuple } from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements AfterViewInit {

  private map: any;

  private flamingoLocations: {name: string; coords: LatLngTuple; }[] = [
    { name: 'Camargue, France', coords: [43.5, 4.4] },
    { name: 'Lac Nakuru, Kenya', coords: [-0.3667, 36.0833] },
    { name: 'Laguna Colorada, Bolivie', coords: [-22.2, -67.8] },
    { name: 'Lac Bogoria, Kenya', coords: [0.25, 36.1] },
    { name: 'Delta de l\'Okavango, Botswana', coords: [-19.5, 23.5] },
    { name: 'Yucatán, Mexique', coords: [21.5, -88.1] },
    { name: 'Etosha Pan, Namibie', coords: [-18.8, 16.5] },
    { name: 'Salar de Uyuni, Bolivie', coords: [-20.1338, -67.4891] },
    { name: 'Îles Galápagos, Équateur', coords: [-0.9538, -90.9656] },
    { name: 'Chili (Atacama, Laguna Chaxa)', coords: [-23.1333, -68.2333] }
  ];

  async ngAfterViewInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      const L = await import('leaflet');

      this.map = L.map('map').setView([0, 0], 2); // Vue monde

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Crée une icône personnalisée
      // const flamingoIcon = L.icon({
      //   iconUrl: 'assets/icons/flamingo.png', // ← chemin de l’image
      //   iconSize: [32, 32],      // taille de l’icône en pixels
      //   iconAnchor: [16, 32],    // point d’ancrage (bas centre)
      //   popupAnchor: [0, -32]    // point d’ancrage du popup
      // });

      // Ajoute les marqueurs
      this.flamingoLocations.forEach(location => {
        L.marker(location.coords)
          .addTo(this.map)
          .bindPopup(`<strong>${location.name}</strong>`);
      })
    }  
  }
}

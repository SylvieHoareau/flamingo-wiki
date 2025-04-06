import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements AfterViewInit {

  private map: any;

  async ngAfterViewInit(): Promise<void> {
    if (typeof window !== 'undefined') {
      const L = await import('leaflet');

      this.map = L.map('map').setView([43.5, 4.4], 8);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    }  
  }
}

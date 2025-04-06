import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacteristicsComponent } from './pages/characteristics/characteristics.component';
import { MapComponent } from './pages/map/map.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'caracteristiques', component: CharacteristicsComponent},
    {path: 'carte', component: MapComponent},
    {path: 'galerie', component: GalleryComponent},
    {path: '**', redirectTo: ''}
];

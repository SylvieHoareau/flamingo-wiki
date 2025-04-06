

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'caracteristiques', component: CharacteristicsComponent},
    {path: 'cartes', component: MapComponent},
    {path: 'galerie', component: GalleryComponent},
    {path: '**', redirectTo: ''}
]
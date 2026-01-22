import { Routes } from '@angular/router';
import { ArtistComponent } from './features/artist/components/artist-component/artist-component';
import { ArtistPage } from './features/artist/pages/artist-page/artist-page';
import { ChartsPage } from './features/chart/pages/charts-page/charts-page';
import { AlbumPage } from './features/album/pages/album-page/album-page';
import { GenrePage } from './features/genre/pages/genre-page/genre-page';
import { AllgenresPage } from './features/genre/pages/allgenres-page/allgenres-page';
import { RadioPage } from './features/radio/pages/radio-page/radio-page';
import { HomePage } from './features/home/pages/home-page/home-page';
import { SearchPage } from './features/search/pages/search-page/search-page';

export const routes: Routes = [
    {path : 'artist/:id' , component : ArtistPage},
    {path : 'chart' , component : ChartsPage},
    {path : 'genre/:id' , component : GenrePage},
    {path : 'genre' , component : AllgenresPage},
    {path : 'chart' , component : ChartsPage},
    {path : 'radio/:id',component : RadioPage},
    {path : 'album/:id' , component : AlbumPage},
    {path : 'search' , component : SearchPage  },
    {path : '' , component : HomePage}
];

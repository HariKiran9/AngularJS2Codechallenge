import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';
import { Routes} from '@angular/router';
import { GameComponent } from './game/game.component';


const APP_ROUTES = [
    
];

export const routes: Routes = [
    {path:'game', component: GameComponent},
    {path:'movie', component: MovieComponent},
    {path:'', component: HomeComponent}
];
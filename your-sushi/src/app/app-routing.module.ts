import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '',  pathMatch: 'full', component: HomeComponent, },
  { path: 'wololo', component: NavbarComponent, },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
  bootstrap: [],
})
export class AppRoutingModule {}

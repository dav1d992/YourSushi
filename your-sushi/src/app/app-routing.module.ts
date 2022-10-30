import { NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes: Routes = [
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

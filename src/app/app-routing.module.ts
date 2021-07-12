import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernComponent } from './layouts/modern/modern.component'
export const routes: Routes = [
  {
    path: '',
    component: ModernComponent
  },
  // {
  //   path: 'app',
  //   component: ModernComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

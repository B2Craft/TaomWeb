import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModernComponent } from './modern/modern.component';

const routes: Routes = [
  {
    path: '',
    component: ModernComponent,
    data: {
      title: "App Landing Page 2 | Unice Landing Page"
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }

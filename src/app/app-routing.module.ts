import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaslGuard } from './masl.guard';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';


const routes: Routes = [
  {
    path: 'public-page', component: PublicPageComponent
  },
  {
    path: '*', component: RestrictedPageComponent, canActivate: [MaslGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

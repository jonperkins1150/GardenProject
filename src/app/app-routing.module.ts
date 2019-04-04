import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'products',      component: ProductsComponent },
  { path: 'splash',   component: SplashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

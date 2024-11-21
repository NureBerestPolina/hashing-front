import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Маршрут для компонента
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Перенаправлення за замовчуванням
  { path: '**', redirectTo: '/home' } // Перенаправлення для невідомих маршрутів
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

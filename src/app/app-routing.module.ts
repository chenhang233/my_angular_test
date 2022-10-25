import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcomponentComponent } from './components/acomponent/acomponent.component';
import { BcomponentComponent } from './components/bcomponent/bcomponent.component';
import { NotFoundcomponentComponent } from './components/not-foundcomponent/not-foundcomponent.component';

const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { path: 'a', component: AcomponentComponent },
  { path: '**', component: NotFoundcomponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

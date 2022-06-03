import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanzineComponent } from './component/fanzine/fanzine.component';
import { RevistaComponent } from './component/revista/revista.component';

const routes: Routes = [{path: 'fanzine', component: FanzineComponent}, {path: 'revista', component: RevistaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPageRoutingModule {}

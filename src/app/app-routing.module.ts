import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'pc-list', loadChildren: () => import('./modules/pc-list/pc-list.module').then(m => m.PcListModule) }, { path: 'disk-list', loadChildren: () => import('./modules/disk-list/disk-list.module').then(m => m.DiskListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiskListComponent } from './disk-list.component';
import { DiskListQuery } from './state/disk-list.query';
import { DiskListService } from './state/disk-list.service';
import { DiskListStore } from './state/disk-list.store';
import { ExtentListQuery } from '../extent-list/state/extent-list.query';
import { ExtentListService } from '../extent-list/state/extent-list.service';
import { ExtentListStore } from '../extent-list/state/extent-list.store';

@NgModule({
  declarations: [
    DiskListComponent,
  ],
  imports: [CommonModule],
  exports: [DiskListComponent],
  providers: [    
    DiskListQuery,
    DiskListService,
    DiskListStore,
    ExtentListQuery,
    ExtentListService,
    ExtentListStore,
  ]
})
export class DiskListModule { }

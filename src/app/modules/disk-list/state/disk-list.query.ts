import { Injectable } from '@angular/core';
import { combineQueries, QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { ExtentListQuery } from '../../extent-list/state/extent-list.query';
import {  DiskWithId } from './disk-list.model';
import { DiskListStore, State } from './disk-list.store';

@Injectable()
export class DiskListQuery extends QueryEntity<State, DiskWithId> {

  constructor(protected store: DiskListStore, private extentListQuery: ExtentListQuery) {
    super(store);
  }
  // tst = this.extentListQuery.selectAll()
  selectDiskWithExtent() {
    return combineQueries([
      this.selectAll(), 
        this.extentListQuery.selectAll({ asObject: true })])
        .pipe(map(([disks, extent]) => {
        return disks.map((disk, i) => {
          return {
            ...disk,
            extent: extent[disk.extent_id]
          };
        });
      })
    );
  }
}
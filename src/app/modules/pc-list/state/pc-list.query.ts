import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GroupWithDevices } from './pc-list.model';
import { PcListStore, State } from './pc-list.store';

@Injectable()
export class PcListQuery extends QueryEntity<State, GroupWithDevices> {

  // getDevices$ = this.select(data => data.entities);

  constructor(protected store: PcListStore) {
    super(store);
  }

}
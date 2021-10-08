import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Extent } from './extent-list.model';
import { State, ExtentListStore } from './extent-list.store';

@Injectable()
export class ExtentListQuery extends QueryEntity<State, Extent> {

  constructor(protected store: ExtentListStore) {
    super(store);
  }

}
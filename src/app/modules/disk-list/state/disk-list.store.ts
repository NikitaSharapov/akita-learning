import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { DiskWithId } from "./disk-list.model";

export function createInitialState(): DiskWithId {
  return {} as DiskWithId;
}

export interface State extends EntityState<DiskWithId> {}

@Injectable()
@StoreConfig({ name: 'disk-list' })
export class DiskListStore extends EntityStore<State, DiskWithId> {
  constructor() {
    super(createInitialState);
  }
}
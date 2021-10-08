import { Injectable } from "@angular/core";
import { GroupsListWithDevices, GroupWithDevices } from "./pc-list.model";
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export function createInitialState(): GroupWithDevices {
  return {
    id: 0,
    name: '',
    devices:[],
  } as GroupWithDevices;
}

export interface State extends EntityState<GroupWithDevices> {}

@Injectable()
@StoreConfig({ name: 'pc-list' })
export class PcListStore extends EntityStore<State, GroupWithDevices> {
  constructor() {
    super(createInitialState);
  }
}
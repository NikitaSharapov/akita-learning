import { Injectable } from "@angular/core";
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Extent } from "./extent-list.model";

export function createInitialState(): Extent {
  return {} as Extent;
}

export interface State extends EntityState<Extent> {}

@Injectable()
@StoreConfig({ name: 'extent-list' })
export class ExtentListStore extends EntityStore<State, Extent> {
  constructor() {
    super(createInitialState);
  }
}
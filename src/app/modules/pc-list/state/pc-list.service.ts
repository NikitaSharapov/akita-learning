import { Injectable } from "@angular/core";
import { PcListStore } from "./pc-list.store";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { GroupsListWithDevices } from "./pc-list.model";

@Injectable()
export class PcListService {

  constructor(private pcListStore: PcListStore,
    private http: HttpClient) {
  }
  
  add(): Observable<GroupsListWithDevices>{
    return this.http.get<GroupsListWithDevices>('http://localhost:3000/api/groups/list/devices').pipe(
      tap(data => this.pcListStore.add(data.data))
    )
  }
}
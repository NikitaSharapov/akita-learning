import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { DisksWithId } from "./disk-list.model";
import { DiskListStore } from "./disk-list.store";

@Injectable()
export class DiskListService {

  constructor(private diskListStore: DiskListStore,
    private http: HttpClient) {
  }
  
  add(): Observable<DisksWithId>{
    return this.http.get<DisksWithId>('http://localhost:3000/api/disks/6be7d980-46f1-12e0-a7fe-38d567af69c9').pipe(
      tap(data => this.diskListStore.add(data.data))
    )
  }
}
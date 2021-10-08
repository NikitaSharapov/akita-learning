import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { ExtentList } from "./extent-list.model";
import { ExtentListStore } from "./extent-list.store";

@Injectable()
export class ExtentListService {

  constructor(private extentListStore: ExtentListStore,
    private http: HttpClient) {
  }
  
  add(): Observable<ExtentList>{
    return this.http.get<ExtentList>('http://localhost:3000/api/nas/list/extent').pipe(
      tap(data => this.extentListStore.add(data.data))
    )
    // return new Observable(s => {
    //   setTimeout(() => s.next({}), 2000);
    // });
  }
}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GroupWithDevices } from './state/pc-list.model';
import { PcListQuery } from './state/pc-list.query';
import { PcListService } from './state/pc-list.service';

@Component({
  selector: 'app-pc-list',
  templateUrl: './pc-list.component.html',
  styleUrls: ['./pc-list.component.scss']
})
export class PcListComponent implements OnInit {
  data$!: Observable<GroupWithDevices[]>;
  getDevices$: any;
  constructor(private pcListQuery: PcListQuery, private pcListService: PcListService) { }

  ngOnInit(): void {
    this.data$ = this.pcListQuery.selectAll();
    this.pcListService.add().subscribe();
    // this.pcListQuery.getDevices$.subscribe(res => console.log(res))
  }

}

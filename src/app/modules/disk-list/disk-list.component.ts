import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExtentListService } from '../extent-list/state/extent-list.service';
import { DiskWithId } from './state/disk-list.model';
import { DiskListQuery } from './state/disk-list.query';
import { DiskListService } from './state/disk-list.service';

@Component({
  selector: 'app-disk-list',
  templateUrl: './disk-list.component.html',
  styleUrls: ['./disk-list.component.scss']
})

export class DiskListComponent implements OnInit {
  data$!: Observable<DiskWithId[]>;
  constructor(private diskListQuery: DiskListQuery, private diskListService: DiskListService, private extentListService: ExtentListService) { }

  ngOnInit(): void {
    this.data$ = this.diskListQuery.selectAll();
    this.diskListQuery.selectDiskWithExtent().subscribe(res => console.log(res));
    this.diskListService.add().subscribe();
    this.extentListService.add().subscribe();
  }

}

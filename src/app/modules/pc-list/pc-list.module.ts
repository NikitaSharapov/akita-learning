import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PcListComponent } from './pc-list.component';
import { PcListQuery } from './state/pc-list.query';
import { PcListService } from './state/pc-list.service';
import { PcListStore } from './state/pc-list.store';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    PcListComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  exports: [PcListComponent],
  providers: [    
    PcListQuery,
    PcListService,
    PcListStore,
  ]
})
export class PcListModule { }

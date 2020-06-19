import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';


const materialComponents = [
  MatDialogModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatTabsModule
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }

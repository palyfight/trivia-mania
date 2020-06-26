import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips'

const materialComponents = [
  MatInputModule,
  MatDialogModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatAutocompleteModule, 
  MatChipsModule,
  MatFormFieldModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }

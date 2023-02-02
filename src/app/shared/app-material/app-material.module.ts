import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
})
export class AppMaterialModule {}

import { Component, inject, viewChild } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { HttpResourceRef } from '@angular/common/http';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { Filter, FilterDialogData, FilterDialogResult } from '../../../core/types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  imports: [MatDivider, MatListOption, MatSelectionList, MatButton],
  selector: 'app-filter-dialog',
  styleUrl: './filter-dialog.css',
  templateUrl: './filter-dialog.html',
})
export class FilterDialog {
  readonly data = inject<FilterDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject<MatDialogRef<FilterDialog, FilterDialogResult>>(MatDialogRef);
  brands = this.data.brands;
  types = this.data.types;
  brandList = viewChild<MatSelectionList>('brandList');
  typesList = viewChild<MatSelectionList>('typesList');

  applyFilters() {
    const brandIds = this.brandList()?.selectedOptions.selected.map((o) => o.value) ?? [];

    const typeIds = this.typesList()?.selectedOptions.selected.map((o) => o.value) ?? [];
    this.dialogRef.close({ brandIds, typeIds });
  }
}

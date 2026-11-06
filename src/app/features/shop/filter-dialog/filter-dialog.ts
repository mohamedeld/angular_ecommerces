import { Component, inject, viewChild } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { HttpResourceRef } from '@angular/common/http';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { Filter } from '../../../core/types';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
interface FilterDialogData {
  brands: HttpResourceRef<Filter[]>;
  types: HttpResourceRef<Filter[]>;
}
@Component({
  imports: [MatDivider, MatListOption, MatSelectionList, MatButton],
  selector: 'app-filter-dialog',
  styleUrl: './filter-dialog.css',
  templateUrl: './filter-dialog.html',
})
export class FilterDialog {
  readonly data = inject<FilterDialogData>(MAT_DIALOG_DATA);

  brands = this.data.brands;
  types = this.data.types;
  brandList = viewChild<MatSelectionList>('brandList');
  typesList = viewChild<MatSelectionList>('typesList');

  applyFilters() {
    const brandIds = this.brandList()?.selectedOptions.selected.map((o) => o.value);
    const typeIds = this.typesList()?.selectedOptions.selected.map((o) => o.value);
    console.log('brands:', brandIds, 'types:', typeIds);
  }
}

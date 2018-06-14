import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() singleChildRowDetail: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private apiService: ApiService) {
  }

  dataSource = new MatTableDataSource();
  displayedColumns = ['name', 'surname', 'expand'];

  private openedRow: CdkDetailRowDirective;

  onToggleChange(cdkDetailRow: CdkDetailRowDirective): void {
    if (this.singleChildRowDetail && this.openedRow && this.openedRow.expanded) {
      this.openedRow.toggle();
    }
    this.openedRow = cdkDetailRow.expanded ? cdkDetailRow : undefined;
  }


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.apiService.getData()
      .subscribe(result => {
        this.dataSource.data = result;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}







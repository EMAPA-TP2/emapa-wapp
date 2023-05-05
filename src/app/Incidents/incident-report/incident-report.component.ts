import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.css']
})
export class IncidentReportComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  date: string;
  position: number;
  description: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '2023-05-02', description: '1.0079', status: '0'},
  {position: 2, date: '2023-05-02', description: '4.0026', status: '7'},
  {position: 3, date: '2023-05-01', description: '6.941', status: '7'},
  {position: 4, date: '2023-05-01', description: '9.0122', status: '8'},
  {position: 5, date: '2023-04-30', description: '10.811', status: '7'},
  {position: 6, date: '2023-04-30', description: '12.0107', status: '7'},
  {position: 7, date: '2023-04-25', description: '14.0067', status: '7'},
  {position: 8, date: '2023-04-22', description: '15.9994', status: '7'},
  {position: 9, date: '2023-04-20', description: '18.9984', status: '9'},
  {position: 10, date: '2023-04-19', description: '20.1797', status: '9'},
  {position: 11, date: '2023-04-18', description: '22.9897', status: '9'},
  {position: 12, date: '2023-04-17', description: '24.305', status: '10'},
  {position: 13, date: '2023-04-16', description: '26.9815', status: '12'},
  {position: 14, date: '2023-04-16', description: '28.0855', status: '7'},
  {position: 15, date: '2023-04-16', description: '30.9738', status: '14'},
  {position: 16, date: '2023-04-16', description: '32.065', status: '14'},
  {position: 17, date: '2023-04-14', description: '35.453', status: '6'},
  {position: 18, date: '2023-04-09', description: '39.948', status: '9'},
  {position: 19, date: '2023-04-06', description: '39.0983', status: '10'},
  {position: 20, date: '2023-04-02', description: '40.078', status: '10'},
];

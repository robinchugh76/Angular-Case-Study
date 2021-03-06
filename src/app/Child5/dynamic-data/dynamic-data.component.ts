import { Component, OnInit } from '@angular/core';
import { DynamicDataService } from '../dynamic-data.service';

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.css'],
})
export class DynamicDataComponent implements OnInit {
  initialList: any = [];
  initialData: any = [];
  dataList: any = [];
  tableKeys: any = [];
  sortCount: any = {};

  constructor(private DynamicDataService: DynamicDataService) {}

  ngOnInit(): void {
    this.initialList = this.DynamicDataService.shareData();
    this.initialData = JSON.parse(JSON.stringify(this.initialList));
    this.tableKeys = Object.keys(this.initialList[0]);
    this.tableKeys.shift();
  }

  sorttable(data: any) {
    if (this.sortCount[data]) {
      switch (this.sortCount[data] % 3) {
        case 1:
          this.sortCount[data] += 1;

          this.initialData = this.initialData.sort((a: any, b: any) =>
            a[data] > b[data] ? -1 : 1
          );
          break;

        case 2:
          this.sortCount[data] += 1;

          this.initialData = JSON.parse(JSON.stringify(this.initialList));

          break;

        case 0:
          this.sortCount[data] += 1;
          this.initialData = this.initialData.sort((a: any, b: any) =>
            a[data] > b[data] ? 1 : -1
          );
          break;
      }
    } else {
      this.sortCount[data] = 1;

      this.initialData = this.initialData.sort((a: any, b: any) =>
        a[data] > b[data] ? 1 : -1
      );
    }
  }
}

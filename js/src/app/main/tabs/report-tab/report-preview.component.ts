import { Component, Input } from '@angular/core';

import { IReportPreview } from '../../../models/api';

@Component({
  selector: 'app-report-preview',
  template: `<table *ngIf="previewData.meta.titles.includes('Action'); else noSelfLink" class="plan-preview">
	  <thead class="plan-preview-table-th">
		  <tr><td *ngFor="let header of previewData.meta.titles">{{header}}</td></tr>
	  </thead>
	  <tbody class="plan-preview-table-body">
		  <tr *ngFor="let row of previewData.data">
			  <td *ngFor="let cell of row; index as i; last as isLast">
				  <div *ngIf="isLast||row.length - 2 == i; else otherCell">
                      <a *ngIf="row.length - 2 == i" [href]="cell">View Plan</a>
                      <a *ngIf="isLast" [href]="cell">Generate Quote</a>
                  </div>
                  <ng-template #otherCell>
                      <div *ngIf="previewData.meta.titles.length - i == 3||
                                  previewData.meta.titles.length - i == 2; 
                                  else noImageCell">
                           <img *ngIf="cell != ''; else noImageUrl" [src]="cell" width="100px"/>
                           <ng-template #noImageUrl></ng-template>
                      </div>
                      <ng-template #noImageCell>{{cell}}</ng-template>
                  </ng-template>
			  </td>
		  </tr>
	  </tbody>
  </table>
  <ng-template #noSelfLink>
	  <thead>
		  <tr><td *ngFor="let header of previewData.meta.titles">{{header}}</td></tr>
	  </thead>
	  <tbody>
		  <tr *ngFor="let row of previewData.data"><td *ngFor="let cell of row">{{cell}}</td></tr>
	  </tbody>
  </ng-template>
  `,
})
export class ReportPreviewComponent {
  constructor() {}
  @Input() previewData?: IReportPreview;
}

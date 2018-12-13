import { Component, Input } from '@angular/core';

import { IReportPreview } from '../../../models/api';

@Component({
  selector: 'app-report-preview',
  template: `<table *ngIf="previewData.meta.titles.includes('selflink'); else noSelfLink">
	  <thead>
		  <tr><td *ngFor="let header of previewData.meta.titles">{{header}}</td></tr>
	  </thead>
	  <tbody>
		  <tr *ngFor="let row of previewData.data">
			  <td *ngFor="let cell of row; last as isLast">
				  <div *ngIf="isLast; else otherCell">
					  <a [href]="cell">selflink</a>
				  </div>
				  <ng-template #otherCell>{{cell}}</ng-template>
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

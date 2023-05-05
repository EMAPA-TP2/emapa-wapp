import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterStatusInformationComponent } from './Resources/water-status-information/water-status-information.component';
import { IncidentReportComponent } from './Incidents/incident-report/incident-report.component';

const routes: Routes = [
  {path: 'water-status', component: WaterStatusInformationComponent},
  {path: 'incident-report', component: IncidentReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

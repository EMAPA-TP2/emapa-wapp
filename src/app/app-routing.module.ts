import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterStatusInformationComponent } from './Resources/water-status-information/water-status-information.component';

const routes: Routes = [
  {path: 'water-status', component: WaterStatusInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

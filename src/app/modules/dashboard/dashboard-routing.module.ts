import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { DashboardComponent } from './dashboard.component';
// import { PostJobComponent } from './pages/post-job/post-job.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InteractionComponent } from './pages/interaction-prompt/interaction.component';
 
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path : '',
        component : InteractionComponent
      },
      {
        path: 'settings',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

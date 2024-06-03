import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { EditorModule } from "@tinymce/tinymce-angular";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ProfileComponent } from "./pages/profile/profile.component";
import { InteractionComponent } from './pages/interaction-prompt/interaction.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    InteractionComponent
  ],

  imports: [
    CommonModule,
    EditorModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {}

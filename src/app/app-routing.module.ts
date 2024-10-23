import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { LoginComponent } from "./pages/login/login.component";
import { CreateProjectComponent } from "./pages/create-project/create-project.component";
import { ViewProjectComponent } from "./pages/view-project/view-project.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "createProject", component: CreateProjectComponent },
  { path: "viewProject/:id", component: ViewProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

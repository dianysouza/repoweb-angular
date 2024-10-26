import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectsService } from "../../services/projects.service";
import { Projects } from "../../interfaces/projects";
import { forkJoin, tap } from "rxjs";

@Component({
  selector: "app-view-project",
  templateUrl: "./view-project.component.html",
  styleUrl: "./view-project.component.scss",
})
export class ViewProjectComponent {
  idProject: string = "";
  isLoading: boolean = false;
  project: Projects;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idProject = params["id"];
      this.loadProject(this.idProject);
    });
  }

  loadProject(id: string) {
    this.isLoading = true;

    forkJoin([this.getProject(id), this.updateAccessProject(id)]).subscribe({
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  getProject(id: string) {
    return this.projectsService.getProject(id).pipe(
      tap((response: Projects) => {
        this.project = response;
      })
    );
  }

  updateAccessProject(id: string) {
    return this.projectsService.updateAcessProject(id);
  }
}

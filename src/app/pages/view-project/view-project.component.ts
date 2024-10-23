import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProjectsService } from "../../services/projects.service";
import { Projects } from "../../interfaces/projects";

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
    });
    this.loadProject(this.idProject);
  }

  loadProject(id: string) {
    this.isLoading = true;
    const projectRequest = this.getProjet(id);

    Promise.all([projectRequest]).finally(() => {
      this.isLoading = false;
    });
  }

  getProjet(id: string) {
    this.projectsService.getProject(id).subscribe({
      next: (response: any) => {
        this.project = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

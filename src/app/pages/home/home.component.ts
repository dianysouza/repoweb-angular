import { Component } from '@angular/core';
import { Projects } from '../../interfaces/projects';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  listProjectsByID: Projects[] = [];
  listProjectsByAccess: Projects[] = [];
  isLoading: boolean = false;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit()
  {
    this.loadProjects();
    //this.projeto();
  }

  loadProjects()
  {
    this.isLoading = true;
    const idRequest = this.listAllProjectsById();
    const accessRequest = this.listAllProjectsByAccess();

    Promise.all([idRequest, accessRequest]).finally(() => {
      this.isLoading = false;
    });
  }

  listAllProjectsById(): Promise<void>
  {
    return new Promise((resolve, reject) => {
      this.projectsService.listProjects().subscribe({
        next: (response: any) => {
          this.listProjectsByID = response.sort((a: any, b: any) => b.cd_projeto - a.cd_projeto);
          resolve();
        },
        error: (err) => {
          console.error(err);
          reject(err);
        }
      });
    });
  }

  listAllProjectsByAccess(): Promise<void>
  {
    return new Promise((resolve, reject) => {
      this.projectsService.listProjects().subscribe({
        next: (response: any) => {
          this.listProjectsByAccess = response.sort((a: any, b: any) => b.qt_acesso - a.qt_acesso);
          resolve();
        },
        error: (err) => {
          console.error(err);
          reject(err);
        }
      });
    });
  }

  /*projeto()
  {
    this.projectsService.getProject(2).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }*/

}

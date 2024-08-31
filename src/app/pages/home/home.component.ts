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

  constructor(private projectsService: ProjectsService) {}

  ngOnInit()
  {
    this.listAllProjectsByAccess();
    this.listAllProjectsById();
    //this.projeto();
  }

  listAllProjectsById()
  {
    this.projectsService.listProjects().subscribe({
      next: (response: any) => {
        this.listProjectsByID = response;
        this.listProjectsByID = this.listProjectsByID.sort((a,b) => b.cd_projeto - a.cd_projeto);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  listAllProjectsByAccess()
  {
    this.projectsService.listProjects().subscribe({
      next: (response: any) => {
        this.listProjectsByAccess = response;
        this.listProjectsByAccess = this.listProjectsByAccess.sort((a,b) => b.qt_acesso - a.qt_acesso);
      },
      error: (err) => {
        console.log(err);
      }
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

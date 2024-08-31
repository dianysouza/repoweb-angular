import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projects } from '../interfaces/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  readonly apiURL: string = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  listProjects()
  {
    return this.http.get<Projects>(`${this.apiURL}/projetos`);
  }

  getProject(idProject: number)
  {
    return this.http.get<Projects>(`${this.apiURL}/projetos/${idProject}`);
  }

  addProject()
  {

  }

  updateProject()
  {
    
  }

  deleteProject()
  {

  }
}

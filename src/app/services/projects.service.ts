import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Projects } from "../interfaces/projects";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  readonly apiURL: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  listProjects() {
    return this.http.get<Projects>(`${this.apiURL}/projetos`);
  }

  getProject(idProject: string) {
    return this.http.get<Projects>(`${this.apiURL}/projetos/${idProject}`);
  }

  addProject(project: Projects): Observable<Projects> {
    return this.http.post<Projects>(`${this.apiURL}/projetos`, project);
  }

  updateProject() {}

  deleteProject() {}
}

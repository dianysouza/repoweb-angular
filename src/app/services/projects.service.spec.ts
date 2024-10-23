import { TestBed } from "@angular/core/testing";

import { ProjectsService } from "./projects.service";
import { HttpClient } from "@angular/common/http";
import { NavbarComponent } from "../components/navbar/navbar.component";

describe("ProjectsService", () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [{ provide: HttpClient, useValue: {} }],
    });
    service = TestBed.inject(ProjectsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

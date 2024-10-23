import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ViewProjectComponent } from "./view-project.component";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ProjectsService } from "../../services/projects.service";
import { ReactiveFormsModule } from "@angular/forms";

describe("ViewProjectComponent", () => {
  let component: ViewProjectComponent;
  let fixture: ComponentFixture<ViewProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewProjectComponent, NavbarComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: "1" }),
          },
        },
        {
          provide: ProjectsService,
          useValue: {
            getProject: () =>
              of({
                cd_projeto: "1",
                aa_projeto: "2024",
                ar_projeto: "",
                cd_cutter: "",
                nm_autores: "Diany Souza",
                nm_classificacao: "",
                nm_curso: "sdi",
                nm_orientado: "Daniel Lucas",
                nm_projeto: "LocalPet",
                qt_acesso: "20",
              }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { Component, ElementRef, inject, Input, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProjectsService } from "../../services/projects.service";
import { HttpErrorResponse } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../components/dialog/dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrl: "./create-project.component.scss",
})
export class CreateProjectComponent {
  projectForm: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.projectForm = this.formBuilder.group({
      nm_projeto: ["", Validators.required],
      nm_autores: ["", Validators.required],
      nm_curso: ["", Validators.required],
      nm_orientador: ["", Validators.required],
      nm_classificacao: ["", Validators.required],
      cd_cutter: ["", Validators.required],
      aa_projeto: ["", Validators.required],
      ar_projeto: ["", Validators.required],
    });
  }

  onSubmit(): any {
    if (this.projectForm.valid) {
      this.projectsService.addProject(this.projectForm.value).subscribe({
        next: () => this.handleSuccess(),
        error: (error: HttpErrorResponse) => this.handleError(error),
      });
    }
  }

  handleSuccess(): void {
    this.dialog.open(DialogComponent, {
      data: {
        message: "Projeto cadastrado com sucesso.",
        title: "Tudo certo!",
      },
    });
    this.router.navigate(["home"]);
  }

  handleError(error: HttpErrorResponse): void {
    this.dialog.open(DialogComponent, {
      data: {
        message:
          "Algo de errado aconteceu. Por favor, tente novamente em instantes.",
        title: "Algo de errado aconteceu",
      },
    });
    console.log(error);
  }
}

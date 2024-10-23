import { Component, signal } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { merge, Subject, takeUntil } from "rxjs";
import { Users } from "../../interfaces/users";
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../../components/dialog/dialog.component";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  userByName: Users;
  hide = signal(true);
  errorMessage: string = "";
  userForm: FormGroup;
  private destroy$ = new Subject<void>();

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private route: Router,
    private dialog: MatDialog
  ) {
    this.userForm = this.formBuilder.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {
    merge(this.userForm.statusChanges, this.userForm.valueChanges)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  updateErrorMessage() {
    const userControl = this.userForm.get("user");
    if (userControl?.hasError("required") && userControl.touched) {
      this.errorMessage = "Você precisa digitar um nome de usuário";
    } else {
      this.errorMessage = "";
    }
  }

  onSubmit() {
    const { user: username, password } = this.userForm.value;
    this.userService.getUser(username, password).subscribe({
      next: (response: Users) => this.handleSuccess(response),
      error: (error: HttpErrorResponse) => this.handleError(error),
    });
  }

  private handleSuccess(response: Users): void {
    const { cd_usuario, nm_usuario } = response;
    sessionStorage.setItem("cdUsuario", cd_usuario.toString());
    sessionStorage.setItem("nomeUsuario", nm_usuario);
    this.route.navigate(["home"]);
  }

  private handleError(error: HttpErrorResponse): void {
    const message =
      error.status === 404
        ? "Por favor, tente novamente."
        : "Por favor, tente novamente em instantes.";

    const title =
      error.status === 404
        ? "Nome de usuário e/ou senha inválidos"
        : "Algo de errado aconteceu";

    this.dialog.open(DialogComponent, {
      data: { message, title },
    });
  }
}

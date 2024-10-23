import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateProjectComponent } from "./create-project.component";
import { HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "../../components/navbar/navbar.component";

describe("CreateProjectComponent", () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProjectComponent, NavbarComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatLabel,
        MatFormField,
        MatInput,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: HttpClient, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

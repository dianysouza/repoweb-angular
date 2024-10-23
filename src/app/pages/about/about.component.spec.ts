import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutComponent } from "./about.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatLabel } from "@angular/material/form-field";

describe("AboutComponent", () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent, NavbarComponent],
      imports: [ReactiveFormsModule, MatLabel],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

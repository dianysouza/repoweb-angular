import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ShimmerComponent } from "../../components/shimmer/shimmer.component";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, NavbarComponent, ShimmerComponent],
      imports: [MatCardModule, ReactiveFormsModule, MatFormField, FormsModule],
      providers: [
        { provide: HttpClient, useValue: {} },
        { provide: HttpHandler, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

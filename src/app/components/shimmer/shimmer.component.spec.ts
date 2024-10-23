import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ShimmerComponent } from "./shimmer.component";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("ShimmerComponent", () => {
  let component: ShimmerComponent;
  let fixture: ComponentFixture<ShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShimmerComponent],
      imports: [MatCardModule, ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

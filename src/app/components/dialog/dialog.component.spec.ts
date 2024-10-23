import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { DialogComponent } from "./dialog.component";
import { InjectionToken } from "@angular/core";
import { of } from "rxjs";
import { ReactiveFormsModule } from "@angular/forms";

describe("DialogComponent", () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogComponent],
      imports: [MatDialogModule, ReactiveFormsModule],
      providers: [
        {
          provide: InjectionToken,
          useValue: {
            paramMap: of({ get: () => "mockProjectId" }),
          },
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "./card.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      providers: [
        { provide: RouterLink, useValue: {} },
        { provide: HttpClient, useValue: {} },
        { provide: HttpHandler, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

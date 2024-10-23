import { TestBed } from "@angular/core/testing";

import { UsersService } from "./users.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { NavbarComponent } from "../components/navbar/navbar.component";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [{ provide: HttpClient, useValue: {} }],
    });
    service = TestBed.inject(UsersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

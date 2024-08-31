import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  userName: string | null;
  sessionActive: boolean;

  constructor(private route: Router) {}

  ngOnInit()
  {
    this.userName = sessionStorage.getItem('nomeUsuario');
    if (this.userName == null)
    {
      this.sessionActive = false;
    }
    else
    {
      this.sessionActive = true;
    }
  }

  endSession()
  {
    sessionStorage.clear();
    location.reload();
  }

}

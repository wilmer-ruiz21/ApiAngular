import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiFestivo';

  constructor(private router:Router){}

  validar(){
    this.router.navigate(["festivo"]);
  }
}

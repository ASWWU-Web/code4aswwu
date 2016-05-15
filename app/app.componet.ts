import { Component } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Login } from "./login.component";

@RouteConfig([
  {
    path:"/login",
    name:"Login",
    component: Login,
    useAsDefault: true
  }
])
@Component({
  selector: "my-app",
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  template: `
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3 text-center">Code 4 ASWWU</h1>
      <p class="lead text-center">Get paid whenever to work wherever. </p>
    </div>
  </div>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})

export class Appcomponent { }

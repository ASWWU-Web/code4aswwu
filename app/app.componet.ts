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
  <h1> Code 4 ASWWU</h1>
  <router-outlet></router-outlet>
  `
})

export class Appcomponent { }

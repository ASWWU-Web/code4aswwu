import { Component } from "@angular/core";

@Component({
  selector: "login",
  template: `
  <div class="row">
    <div class="col-sm-12 col-md-4 col-md-offset-4">
      <h2> Login</h2>
      <form id="login">
      <fieldset class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email">
      </fieldset>
      <fieldset class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password">
      </fieldset>
      </form>
      <button type="submit" form='login' class="btn btn-primary" (click)="login()">Login</button>

    </div>
  </div>

  `
})

export class Login {
  thingy= "Whats up?"
  login(){
    console.log("Logging in");
  }
}

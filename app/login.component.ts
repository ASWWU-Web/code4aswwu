import { Component } from "@angular/core";

@Component({
  selector: "login",
  template: `<h2> Login</h2>
  <form>
  <fieldset class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter email">
  </fieldset>
  <fieldset class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password">
  </fieldset>
  </form>
  <button class="btn btn-primary">Login</button>
  `
})

export class Login {

}

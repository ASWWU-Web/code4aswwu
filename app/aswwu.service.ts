import { Injectable } from '@angular/core';

@Injectable()
export class ASWWU {
  authToken;
  login() {
    //Todo: Implement this.
    console.log("login service login");
  }
  setAuth(){
    this.authToken = {
      "thingy": "another thigny",
      "thingy2": "another thingy2"
    }
  }
  getAuth(){
    return this.authToken;
  }
}

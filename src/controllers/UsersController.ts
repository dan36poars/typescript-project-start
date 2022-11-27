import { User } from "@models/User";

export class UserController {
  constructor() {
    console.log("User Controller started!!!");
  }

  public test(): void {
    const user = new User();
    user.email = "daniel-paulacorrea@hotmail.com";
    user.name = "daniel corrêa";
  }
}

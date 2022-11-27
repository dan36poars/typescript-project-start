import { User } from "@models/User";

export class UserController {
constructor() {}
    test() {
        const user = new User()
        user.email = "daniel-paulacorrea@hotmail.com";
        user.name = "daniel corrêa";
    }
}
import { User } from "@models/User";

test("Test API", async () => {
  const user = await new User();
  user.name = "foo";
  expect(user.name).toEqual("foo");
});

import { describe, expect, it } from "vitest";
import { userServices } from "./userServices";
import { userRepositoryInMemory } from "../repositories/userRepositoryInMemory";

describe("test user create function", () => {
  it("should create a user", async () => {
    const user = {
      id: "1",
      name: "Odilon Enrique",
      email: "odilonenrique@gmail.com",
    };

    const userCreated = await userServices.create(user, userRepositoryInMemory);
    // expect(userCreated).toHaveProperty("id" || "name");
    expect(userCreated).toHaveProperty("id");
  });
});

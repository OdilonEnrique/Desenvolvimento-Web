import { Router } from "express";

export const router = Router();

// router.get("/", (_req, res) => {
//   res.send({ name: "Odilon" });
// });

router.get("/", (_req, res) => {
  res.send([
    { id: 1, name: "Bulbassaur" },
    { id: 150, name: "Mew" },
    { id: 4, name: "Charizard" },
    { id: 20, name: "Pikachu" },
  ]);
});

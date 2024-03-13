import { Router } from "express";

export const router = Router();

// router.get("/", (_req, res) => {
//   res.send({ name: "Odilon" });
// });

router.get("/pokemon", (_req, res) => {
  res.send([
    { id: 1, name: "Bulbassaur" },
    { id: 150, name: "Mew" },
    { id: 4, name: "Charizard" },
    { id: 20, name: "Pikachu" },
  ]);
});

// route params
// router.get("/user/:id/:name", (req, res) => {
//   const { id, name } = req.params;
//   res.send({ id, name });
// });

// query params
// router.get("/user", (req, res) => {
//   const { id, name, age } = req.query;
//   res.send({ id, name, age });
// });

// body params
router.post("/user", (req, rest) => {
  const { id, name, age } = req.body;
  console.log({ id, name, age });
  rest.send({ status: "User create!" });
});

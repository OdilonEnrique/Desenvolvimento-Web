import { Response } from "express";
import { Request } from "express";

export const userControllers = {
  create(req: Request, res: Response) {
    const { id, name, age } = req.body;
    if (id && name && age) {
      res.json({ status: `user ${id} created!` });
      return;
    }

    res.json({ status: `user not created!` });
  },

  read(req: Request, res: Response) {
    const { id } = req.params;
    res.json({ user: id });
  },
};

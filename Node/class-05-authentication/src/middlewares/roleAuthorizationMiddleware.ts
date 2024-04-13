import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/userRepository";

type Roles = "admin" | "default";

export function roleAuthorizationMiddleware(role: Roles[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userRepository.getByID(req.UserID);

      if (!role.includes(user.role)) {
        throw res.status(401).json({ message: "Usuário não autorizado" });
      }

      return next();
    } catch (error) {
      return next(error);
    }
  };
}

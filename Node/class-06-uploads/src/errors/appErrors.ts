import { Request, Response, NextFunction } from "express";

type AppError = {
  status: number;
  message: string;
};
export function appErrors(
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Middleware Errors -", error);
  res.status(error.status || 500);
  res.json({ Message: error.message || "Server error" });
}

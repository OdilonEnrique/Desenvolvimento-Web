import { Request, Response, NextFunction } from "express";

type AppError = {
  status: number;
  message: string;
};
export function appErrors(
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("middle Error - ", error);
  return res
    .status(error.status || 500)
    .json({ message: error.message || "server error" });
}

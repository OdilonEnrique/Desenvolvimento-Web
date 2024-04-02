import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

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

  if (error instanceof ZodError) {
    return res
      .status(error.status || 500)
      .json({
        message: JSON.parse(error.message)[0].message || "server error",
      });
  }
  return res
    .status(error.status || 500)
    .json({ message: error.message || "server error" });
}

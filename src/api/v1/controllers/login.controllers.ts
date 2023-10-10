import { Request, Response } from "express";
import { HttpResponse } from "../../../response/http.response";

export default class LoginController {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  loginGet = (_req: Request, res: Response) => {
    try {
      const data: Array<object> = [
        { id: 1, name: "Juan" },
        { id: 2, name: "Pedro" },
        { id: 3, name: "Maria" },
      ];
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, "No se encontraron datos");
      }

      return this.httpResponse.Ok(res, "Datos encontrados", data, data.length);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message = error.message;
        return this.httpResponse.InternalServerError(res, message);
      } else {
        const message = "Error al obtener los datos";
        return this.httpResponse.InternalServerError(res, message);
      }
    }
  };
}

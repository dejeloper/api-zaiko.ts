import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  UNSUPPORTED_MEDIA_TYPE = 415,
  UNPROCESSABLE_ENTITY = 422,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export class HttpResponse {
  Ok(
    res: Response,
    message: string,
    data: object | null = null,
    count: number
  ): Response {
    return res.status(HttpStatus.OK).json({
      success: true,
      data,
      message,
      count,
    });
  }

  Created(
    res: Response,
    message: string,
    data: object | null = null,
    count: number
  ): Response {
    return res.status(HttpStatus.CREATED).json({
      success: true,
      data,
      message,
      count,
    });
  }

  Accepted(
    res: Response,
    message: string,
    data: object | null = null,
    count: number
  ): Response {
    return res.status(HttpStatus.ACCEPTED).json({
      success: true,
      data,
      message,
      count,
    });
  }

  NoContent(
    res: Response,
    message: string,
    data: object | null = null,
    count: number
  ): Response {
    return res.status(HttpStatus.NO_CONTENT).json({
      success: true,
      data,
      message,
      count,
    });
  }

  MovedPermanently(
    res: Response,
    message: string,
    data: object | null = null,
    count: number
  ): Response {
    return res.status(HttpStatus.MOVED_PERMANENTLY).json({
      success: true,
      data,
      message,
      count,
    });
  }

  Found(
    res: Response,
    message: string,
    data: object | null = null,
    count: number
  ): Response {
    return res.status(HttpStatus.FOUND).json({
      success: true,
      data,
      message,
      count,
    });
  }

  NotModified(
    res: Response,
    message: string,
    data: object | null = null,
    count: number
  ): Response {
    return res.status(HttpStatus.NOT_MODIFIED).json({
      success: true,
      data,
      message,
      count,
    });
  }

  BadRequest(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.BAD_REQUEST).json({
      success: false,
      data,
      message,
      count,
    });
  }

  Unauthorized(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      success: false,
      data,
      message,
      count,
    });
  }

  Forbidden(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      success: false,
      data,
      message,
      count,
    });
  }

  NotFound(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      success: false,
      data,
      message,
      count,
    });
  }

  MethodNotAllowed(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
      success: false,
      data,
      message,
      count,
    });
  }

  NotAcceptable(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.NOT_ACCEPTABLE).json({
      success: false,
      data,
      message,
      count,
    });
  }

  RequestTimeout(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.REQUEST_TIMEOUT).json({
      success: false,
      data,
      message,
      count,
    });
  }

  Conflict(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.CONFLICT).json({
      success: false,
      data,
      message,
      count,
    });
  }

  Gone(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.GONE).json({
      success: false,
      data,
      message,
      count,
    });
  }

  LengthRequired(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.LENGTH_REQUIRED).json({
      success: false,
      data,
      message,
      count,
    });
  }

  PrecopnditionFailed(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.PRECONDITION_FAILED).json({
      success: false,
      data,
      message,
      count,
    });
  }

  UnsoportedMediaType(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.UNSUPPORTED_MEDIA_TYPE).json({
      success: false,
      data,
      message,
      count,
    });
  }

  UnprocessableEntity(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      success: false,
      data,
      message,
      count,
    });
  }

  TooManyRequests(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.TOO_MANY_REQUESTS).json({
      success: false,
      data,
      message,
      count,
    });
  }

  InternalServerError(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      data,
      message,
      count,
    });
  }

  NotImplemented(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.NOT_IMPLEMENTED).json({
      success: false,
      data,
      message,
      count,
    });
  }

  BadGateway(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.BAD_GATEWAY).json({
      success: false,
      data,
      message,
      count,
    });
  }

  ServiceUnavailable(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.SERVICE_UNAVAILABLE).json({
      success: false,
      data,
      message,
      count,
    });
  }

  GatewayTimeout(
    res: Response,
    message: string,
    data: object | null = null,
    count: number = 0
  ): Response {
    return res.status(HttpStatus.GATEWAY_TIMEOUT).json({
      success: false,
      data,
      message,
      count,
    });
  }
}

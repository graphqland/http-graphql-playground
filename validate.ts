import { accepts, createHttpError, HttpError, Status } from "./deps.ts";

/** Validate the request is valid GraphQL playground request or not. */
export function validateRequest(
  req: Request,
): [valid: true] | [valid: true, responseInit: { headers: HeadersInit }] | [
  valid: false,
  error: HttpError,
] {
  if (req.method !== "GET") {
    return [
      false,
      createHttpError(
        Status.MethodNotAllowed,
        `Invalid HTTP request method. ${req.method}`,
        { headers: { allow: "GET" } },
      ),
    ];
  }

  if (req.headers.has("accept")) return [true];

  const headers: HeadersInit = { vary: "accept" };
  const mediaType = accepts(req, "text/html");

  if (mediaType !== "text/html") {
    return [
      false,
      createHttpError(
        Status.NotAcceptable,
        `text/html`,
        { expose: true, headers },
      ),
    ];
  }

  return [true, { headers }];
}

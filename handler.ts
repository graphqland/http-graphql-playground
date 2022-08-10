import { validateRequest } from "./validate.ts";
import {
  contentType,
  RenderPageOptions,
  renderPlaygroundPage,
  Status,
  STATUS_TEXT,
} from "./deps.ts";

/** Create HTTP request handler for `graphql-playground`. */
export function createHandler(
  options: RenderPageOptions,
): (req: Request) => Promise<Response> | Response {
  return (req) => {
    const result = validateRequest(req);

    if (!result[0]) {
      const error = result[1];
      const body = error.expose ? error.message : null;
      return new Response(body, {
        status: error.status,
        statusText: STATUS_TEXT[error.status],
        headers: error.headers,
      });
    }

    const page = renderPlaygroundPage(options);
    return new Response(page, {
      status: Status.OK,
      statusText: STATUS_TEXT[Status.OK],
      headers: {
        "content-type": contentType("text/html"),
        ...result[1]?.headers,
      },
    });
  };
}

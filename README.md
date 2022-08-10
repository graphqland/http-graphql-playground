# http-graphql-playground

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/http_graphql_playground)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/http_graphql_playground/mod.ts)
![npm](https://img.shields.io/npm/v/@graphqland/http-graphql-playground)
![GitHub](https://img.shields.io/github/license/graphqland/http-graphql-playground)

HTTP request for `graphql-playground` with standard `Request` and `Response`

## Usage

- `createHandler` - Create HTTP request handler for `graphql-playground`.
- `validateRequest` - Validate the request is valid GraphQL playground request
  or not.

```ts
import { createHandler } from "https://deno.land/x/http_graphql_playground@$VERSION/mod.ts";
import { serve } from "https://deno.land/std@$VERSION/http/mod.ts";

const handler = createHandler({
  endpoint: "/graphql",
});
await serve(handler);
```

## Spec

The response includes the following response status codes and headers:

| Code  |   Content    | Headers                |
| :---: | :----------: | ---------------------- |
| `200` | `text/html`  | `content-type`, `vary` |
| `405` |      -       | `allow`                |
| `406` | `text/plain` | `content-type`, `vary` |

## License

Copyright © 2022-present [graphqland](https://github.com/graphqland).

Released under the [MIT](./LICENSE) license

import { BuildOptions } from "https://deno.land/x/dnt@0.30.0/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {
    undici: true,
  },
  typeCheck: true,
  compilerOptions: {
    lib: ["es2022"],
  },
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "@graphqland/http-graphql-playground",
    version,
    description:
      "HTTP request for graphql-playground with standard Request and Response",
    keywords: [
      "http",
      "handler",
      "graphql",
      "graphql-playground",
      "request",
      "response",
    ],
    license: "MIT",
    homepage: "https://github.com/graphqland/http-graphql-playground",
    repository: {
      type: "git",
      url: "git+https://github.com/graphqland/http-graphql-playground.git",
    },
    bugs: {
      url: "https://github.com/graphqland/http-graphql-playground/issues",
    },
    sideEffects: false,
    type: "module",
    publishConfig: {
      access: "public",
    },
  },
  packageManager: "pnpm",
});

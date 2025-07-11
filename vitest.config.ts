import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/server/main.ts"],
    },
  },
});

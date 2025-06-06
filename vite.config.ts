import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import type { Plugin } from "vite";
import mock from "mockjs";
import url from "node:url";
export function viteMockServer(): Plugin {
  return {
    name: "vite-mock-server",
    configureServer(server) {
      server.middlewares.use('/api/list', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        const parseUrl = url.parse(req.url!, true).query;
        const data = mock.mock({
          "list|1000": [
            {
              "id|+1": 1,
              "name":parseUrl.keyWord,
              "address": '@county(true)',
            },
          ],
        });
        console.log('parseUrl',parseUrl);
        res.end(JSON.stringify(data));
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),viteMockServer()],
});

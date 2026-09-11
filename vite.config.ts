// Configuración de Vite para TanStack Start / React
// Incluye TanStack Start, React, Tailwind CSS y resolución de rutas con @.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});

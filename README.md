# TAPear Frontend

Sitio SPA (Vite + React + TypeScript + Tailwind) desplegado en Cloudflare Pages.

## Desarrollo local

- Instalar deps: `npm install`
- Arrancar: `npm run dev`
- Build: `npm run build`
- Previsualizar build: `npm run preview`

## Cloudflare Pages (recomendado: despliegue por Git)

Producción = rama `main` y build en Cloudflare.

- Pages → Projects → tapear-frontend → Settings → Builds & deployments:
  - Production branch: `main`
  - Build command: `npm ci && npm run build`
  - Output directory: `dist`
  - Root directory: vacío (si el proyecto está en la raíz)
  - Node version: `20` (opcional)

- SPA fallback:
  - `public/_redirects` con `/*  /index.html  200` (ya incluido)

- Flujo:
  1. Trabaja en una rama feature, abre PR → merge a `main`.
  2. Cloudflare compila y publica automáticamente (Environment = Production).
  3. Dominio personalizado `www.tapearte.com` sirve SIEMPRE el canal de Producción.

## Alternativa: despliegue manual por CLI

Si prefieres publicar manualmente:

- En Pages, fija Production branch a `production`.
- Luego, localmente:
  - `npm run build`
  - `npm run deploy:pages -- --branch production --commit-dirty=true`

> Nota: No mezclar despliegue Git y CLI para Producción a la vez; elige un flujo.

## Dominio y HTTPS

- DNS: CNAME `www` → `<project>.pages.dev` (proxied). El apex puede redirigir a `www` con una Redirect Rule.
- SSL/TLS: activa "Always Use HTTPS" en Edge Certificates.

## Solución de problemas

- "Nothing is here yet": no existe un despliegue de Producción. Revisa la "Production branch" y publica en esa rama.
- 404 de JS/CSS: no se ejecutó el build. Define Build command y Output directory o sube `dist` ya generado.
- Rutas SPA rotas: verifica `public/_redirects` (`/*  /index.html  200`).

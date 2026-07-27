# Christoppher Mena — Portfolio

Portafolio profesional de **Christoppher Mena**, desarrollador web especializado en Landing Pages modernas, rápidas y optimizadas para conversión.

Construido con Astro 5 + Tailwind CSS 4 + TypeScript.

## Stack tecnológico

| Tecnología | Propósito |
|---|---|
| **Astro 5** | Framework web, generación estática, cero JS por defecto |
| **Tailwind CSS 4** | Estilos utility-first con `@tailwindcss/vite` |
| **TypeScript** | Tipado estricto en toda la base de código |
| **MDX** | Preparado para contenido futuro |
| **@fontsource/inter** | Fuente Inter auto-hosteada (sin Google Fonts externo) |

## Estructura del proyecto

```
src/
├── components/
│   ├── seo/          # BaseHead, Schema, Analytics
│   ├── sections/     # Hero, Services, Projects, About, TechStack, Process, Testimonials, Faq, Cta
│   ├── ui/           # Button, Container, Section, SectionHeader
│   └── widgets/      # Navbar, Footer, CookieBanner
├── constants/        # site, navigation, services, process, projects, testimonials, faq, tech
├── layouts/          # BaseLayout
├── lib/              # scroll-observer, analytics
├── pages/            # index.astro
├── styles/           # global.css (Tailwind + design tokens)
├── types/            # TypeScript interfaces
└── utils/            # cn (classnames helper)
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview del build

```bash
npm run preview
```

## Variables de entorno

Copia `.env.example` a `.env` y completa los valores:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `PUBLIC_GA_ID` | Google Analytics 4 ID (G-XXXXXXXXXX) |
| `PUBLIC_META_PIXEL_ID` | Meta Pixel ID (opcional) |
| `PUBLIC_EMAIL` | Correo de contacto |

## Despliegue

### Netlify / Vercel

1. Conecta el repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Listo — SSL automático

## Licencia

MIT

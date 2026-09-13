import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Landing Page Restobar',
    description:
      'Landing page moderna para un restobar con diseño limpio, animaciones sutiles, menú digital y botón de reserva por WhatsApp.',
    tags: ['Astro', 'Tailwind', 'Animaciones'],
    image: '/projects/restobar-las-tranqueras.png',
    url: 'https://restobar-las-tranqueras.netlify.app/',
  },
  {
    id: 2,
    title: 'E-commerce Dashboard',
    description:
      'Panel de administración con visualización de datos en tiempo real, gráficos interactivos y gestión de inventario.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    url: '#',
  },
  {
    id: 3,
    title: 'Web Corporativa',
    description:
      'Sitio corporativo completo con secciones de servicios, equipo, blog y formulario de contacto. Optimizado para SEO.',
    tags: ['Astro', 'MDX', 'SEO'],
    url: '#',
  },
  {
    id: 4,
    title: 'App de Tareas',
    description:
      'Aplicación web full-stack para gestión de tareas con autenticación, base de datos en tiempo real y modo oscuro.',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    url: '#',
  },
]

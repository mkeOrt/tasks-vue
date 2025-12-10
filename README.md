# Tasks Vue

Aplicación de gestión de tareas construida con Vue 3, TypeScript y arquitectura hexagonal.

## 🛠️ Stack Tecnológico

- **Framework:** Vue 3 + Composition API
- **Lenguaje:** TypeScript
- **Build Tool:** Vite (Rolldown)
- **Estilos:** Tailwind CSS v4
- **Estado del servidor:** TanStack Query (Vue Query)
- **HTTP Client:** Axios
- **Routing:** Vue Router
- **Testing:** Vitest
- **Linting:** ESLint + Prettier

## 📁 Arquitectura

El proyecto sigue una arquitectura hexagonal (ports & adapters) organizada por features:

```
src/
├── shared/              # Código compartido
│   └── infrastructure/  # Infraestructura común (API client)
├── tasks/               # Feature de tareas
│   ├── application/     # Casos de uso
│   ├── domain/          # Entidades, repositorios e interfaces
│   │   ├── entities/
│   │   ├── errors/
│   │   └── repositories/
│   ├── infrastructure/  # Implementaciones concretas
│   │   ├── dtos/
│   │   └── mappers/
│   └── presentation/    # Componentes Vue y composables
│       ├── components/
│       ├── composables/
│       └── views/
└── router/              # Configuración de rutas
```

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js >= 20.19.0 o >= 22.12.0
- npm o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tasks-vue.git
cd tasks-vue

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

### Variables de Entorno

Edita el archivo `.env` con tu configuración:

```env
VITE_API_URL=http://localhost:3000
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run test:unit` | Ejecuta tests unitarios con Vitest |
| `npm run type-check` | Verifica tipos TypeScript |
| `npm run lint` | Ejecuta ESLint y corrige errores |
| `npm run format` | Formatea código con Prettier |

## 🧪 Testing

```bash
# Ejecutar tests en modo watch
npm run test:unit

# Ejecutar tests una vez
npm run test:unit -- --run
```

## 📦 Build para Producción

```bash
npm run build
```

Los archivos compilados estarán en el directorio `dist/`.

## 🔧 Configuración del IDE

### VS Code (Recomendado)

Instala la extensión [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) y desactiva Vetur si lo tienes instalado.

### DevTools del Navegador

- **Chrome/Edge:** [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **Firefox:** [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## 📄 Licencia

MIT

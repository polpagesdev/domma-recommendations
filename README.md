# Sistema de Recomendación de Productos DOMMA

Este proyecto es una aplicación de sistema de recomendación de productos desarrollada con Next.js 14 (utilizando el APP Router), TypeScript y TailwindCSS. Su objetivo es ofrecer recomendaciones de productos basadas en la sintomatología indicada por las usuarias de Domma.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- Node.js (versión 14 o superior)
- npm (versión 6 o superior) o yarn

## Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/polpagesdev/domma-recommendations.git
   cd domma-recommendations
   ```

2. **Instala las dependencias:**

    Usando npm:
    ```
    npm install
    ```
    O usando yarn:
    ```
    yarn install
    ````

## Configuración

Si tu proyecto requiere configuraciones adicionales (por ejemplo, variables de entorno), asegúrate de crear un archivo .env en la raíz del proyecto con las configuraciones necesarias. Puedes utilizar el archivo .env.example como plantilla.

## Puesta en Marcha

Para iniciar el proyecto en modo de desarrollo, utiliza el siguiente comando:

Usando npm:
```
npm run dev
```

O usando yarn:
```
yarn dev
```

La aplicación estará disponible en http://localhost:3000.

## Estructura del Proyecto

A continuación se muestra una breve descripción de la estructura del proyecto:
```
/domma-recommendations
|-- /public
|   |-- /images           # Imágenes y activos públicos
|-- /src
|   |-- /components       # Componentes
|   |-- /app              # App router de Next.js
|       |-- /api          # Rutas de API
|       |-- page          # Página principal de la aplicación
|   |-- /types            # Definiciones de tipos (TypeScript)
|   |-- /utils            # Definiciones de tipos (TypeScript)
|       |-- questions     # Datos de las preguntas
|       |-- products      # Datos de los productos
|-- package.json          # Dependencias y scripts del proyecto
|-- tailwind.config.js    # Configuración de TailwindCSS
|-- next.config.js        # Configuración de Next.js
|-- tsconfig.json         # Configuración de TypeScript
```

## Scripts Disponibles

En el archivo **package.json**, se definen varios scripts útiles para el desarrollo y despliegue del proyecto:

- **dev:** Inicia la aplicación en modo desarrollo.
- **build:** Compila la aplicación para producción.
- **start:** Inicia la aplicación en modo producción.
- **lint:** Ejecuta el linter para verificar el código.
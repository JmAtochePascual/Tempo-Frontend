# Documentación del Frontend

Este es el frontend de la aplicación **Tempo**, una interfaz moderna y responsive construida con **Vite**, **React**, **TypeScript** y **Tailwind CSS**. Este proyecto está diseñado para consumir la API del backend de Tempo, proporcionando una experiencia de usuario fluida y segura para la autenticación y gestión de usuarios.

## 🛠️ Tecnologías y Herramientas

- **Vite**: Entorno de desarrollo rápido y optimizado para aplicaciones modernas.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.
- **Tailwind CSS**: Framework de CSS utilitario para diseñar interfaces rápidamente.
- **React Router DOM**: Manejo de rutas en la aplicación.
- **React Hook Form**: Manejo de formularios con validaciones.
- **Zod**: Validación de esquemas para formularios.
- **Axios**: Cliente HTTP para realizar peticiones a la API.
- **React Query**: Manejo de estado y caché para peticiones asíncronas.
- **React Toastify**: Notificaciones toast para feedback al usuario.
- **Headless UI & Heroicons**: Componentes UI accesibles y personalizables.

## 📁 Estructura del Proyecto

```
src/
│── components/        # Componentes reutilizables (Auth, UI, etc.)
│   │── auth/          # Componentes relacionados con autenticación
│   │── common/        # Componentes generales (Logo, ErrorMessage, etc.)
│── config/            # Configuraciones globales (Axios, etc.)
│── hook/              # Custom hooks (useAuth, etc.)
│── layout/            # Layouts de la aplicación (AppLayout, etc.)
│── page/              # Páginas de la aplicación (Login, Register, Home, etc.)
│   │── auth/          # Páginas relacionadas con autenticación
│── services/          # Servicios para interactuar con la API
│── types/             # Tipos y esquemas de TypeScript
│── App.tsx            # Componente principal de la aplicación
│── main.tsx           # Punto de entrada de la aplicación
```

## 🚀 Características Principales

1. **Autenticación Segura**:

   - Login y registro de usuarios con validación de formularios.
   - Protección de rutas privadas.
   - Uso de **JWT** para la autenticación.

2. **Diseño Responsive**:

   - Interfaz adaptada para dispositivos móviles y desktop.
   - Uso de **Tailwind CSS** para estilos rápidos y consistentes.

3. **Manejo de Estado**:

   - Uso de **React Query** para gestionar peticiones asíncronas y caché.
   - Custom hooks para reutilizar lógica de autenticación.

4. **Validación de Formularios**:

   - Uso de **React Hook Form** y **Zod** para validaciones robustas y personalizadas.

5. **Feedback al Usuario**:

   - Notificaciones toast con **React Toastify**.
   - Mensajes de error claros y específicos.

6. **Documentación Automática**:
   - Uso de **TypeScript** para tipado estático y mejor mantenibilidad.

## 🔧 Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **npm** o **yarn** (gestor de paquetes)
- **Git** (opcional, para clonar el repositorio)

## 🛠️ Instalación y Uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO/frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto y define la siguiente variable:

```
VITE_API_URL=http://localhost:4000/api
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 5. Acceder a la aplicación

Abre tu navegador y visita: [http://localhost:5173](http://localhost:5173)

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO/frontend
```

2. Crea una nueva rama:

```bash
git checkout -b feature/nueva-caracteristica
```

3. Realiza tus cambios y haz commit:

```bash
git add .
git commit -m "Agrega nueva característica"
```

4. Sube los cambios a tu Fork:

```bash
git push origin feature/nueva-caracteristica
```

5. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>

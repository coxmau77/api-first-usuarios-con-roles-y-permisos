# API de Usuarios con Roles y Permisos 🔑

Este proyecto es una implementación de una API RESTful para gestionar usuarios, roles y permisos, siguiendo la metodología de desarrollo **API First**. El contrato de la API se define y valida con **OpenAPI**, garantizando una fuente de verdad única para todos los equipos.


## 🎯 Características Principales

  * **API First**: El contrato de la API se define primero en `openapi.yaml`.
  * **Gestión de Usuarios**: Funcionalidades CRUD completas (`POST`, `GET`, `PUT`, `DELETE`).
  * **Control de Acceso por Roles**: Tres roles principales (`Admin`, `Editor`, `Viewer`) con permisos específicos.
  * **Autenticación Segura**: Implementación de JSON Web Tokens (JWT) para proteger los *endpoints*.
  * **Validación de Contrato**: Uso de `express-openapi-validator` para validar automáticamente las peticiones y respuestas en *runtime*.
  * **Base de Datos**: MongoDB como base de datos persistente.
  * **Pruebas Automatizadas**: Colección de pruebas en Postman y ejecución con Newman para la automatización.


## 🛠️ Stack Tecnológico

  * **Backend**: [Node.js](https://nodejs.org/) y [Express](https://expressjs.com/)
  * **Base de Datos**: [MongoDB](https://www.mongodb.com/) con [Mongoose](https://mongoosejs.com/)
  * **Documentación**: [OpenAPI Specification](https://swagger.io/specification/)
  * **Validación**: [express-openapi-validator](https://www.npmjs.com/package/express-openapi-validator)
  * **Autenticación**: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  * **Pruebas**: [Postman](https://www.postman.com/) y [Newman](https://www.npmjs.com/package/newman)


## 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### 1\. Requisitos Previos

Asegúrate de tener instalados:

  * [Node.js](https://nodejs.org/) (versión 18 o superior)
  * [npm](https://www.npmjs.com/)
  * Una instancia local o remota de [MongoDB](https://www.mongodb.com/)

### 2\. Instalación

Clona el repositorio y navega al directorio del proyecto.

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

Instala las dependencias del proyecto.

```bash
npm install
```

### 3\. Configuración

Crea un archivo `.env` en la raíz del proyecto para tus variables de entorno.

```bash
# URI de conexión a tu base de datos MongoDB
MONGO_URI=<TU_MONGO_URI>

# Clave secreta para firmar los JWT
JWT_SECRET=<TU_CLAVE_SECRETA_JWT>
```

### 4\. Ejecución del Servidor

Inicia el servidor en modo de desarrollo.

```bash
npm run dev
```

La API estará disponible en `http://localhost:3000`. La documentación interactiva de Swagger UI estará en `http://localhost:3000/docs`.


## 🧪 Pruebas Automatizadas

Este proyecto incluye una colección de Postman para realizar pruebas de los *endpoints*.

### 1\. Ejecutar las pruebas

Puedes ejecutar todas las pruebas desde la línea de comandos con Newman.

```bash
# Asegúrate de tener Newman instalado globalmente
npm install -g newman

# Ejecuta las pruebas
newman run fake-api-store.postman_collection.json
```


## 🗺️ Mapa de la API

El contrato completo de la API se encuentra en el archivo `openapi.yaml`. Aquí tienes un resumen de los *endpoints* principales:

  * `POST /auth/login` - Iniciar sesión de un usuario.
  * `POST /users` - Crear un nuevo usuario.
  * `GET /users` - Obtener la lista de todos los usuarios (solo Admin).
  * `GET /users/{id}` - Obtener un usuario específico.
  * `PUT /users/{id}` - Actualizar un usuario existente (Admin y Editor).
  * `DELETE /users/{id}` - Eliminar un usuario (solo Admin).


## 🤝 Contribuciones

Siéntete libre de contribuir a este proyecto. Si encuentras un error o tienes una mejora, por favor, abre un *issue* o un *pull request*.


## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

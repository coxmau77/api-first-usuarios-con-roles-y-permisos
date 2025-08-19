# Proyecto: API de Usuarios con Roles y Permisos 🔑

Un caso de uso fundamental en el desarrollo web: la gestión de usuarios y el control de acceso. En este proyecto, construiremos una API robusta y bien documentada, aplicando la metodología **API First** para garantizar un desarrollo eficiente y escalable.

---

### Módulo 1: Diseño y Contrato API First

#### Clase 1.1: El Corazón del Proyecto: La Especificación OpenAPI (40 minutos) 🚀

**Contenido Teórico:**
Comenzamos con el principio fundamental de **API First**: definir el contrato antes de escribir código. Utilizaremos la **OpenAPI Specification (OAS)** como nuestro lenguaje de diseño. Este `openapi.yaml` será nuestra única fuente de verdad para el *frontend*, el *backend* y las pruebas.

**Observaciones del Instructor:**
* **La clave:** El éxito de este proyecto depende de la claridad y precisión de este documento. Cualquier ambigüedad o error aquí se amplificará en la fase de implementación.
* **Analógicamente:** Piensa en el `openapi.yaml` como el "plano de la API". Los arquitectos (nosotros) diseñan el plano, y los constructores (*frontend* y *backend* developers) lo siguen al pie de la letra.

**Ejemplo Práctico:**
* Crea el archivo **`openapi.yaml`** en la raíz de tu proyecto.
* Define la estructura base: `openapi`, `info`, `servers`.
* En el bloque `info`, incluye `title` y `version`.
* Define el servidor de desarrollo en `servers`.

**Estructura Pedagógica:**
1.  Introducción a la metodología API First.
2.  Explicación de la importancia de OpenAPI.
3.  Creación del archivo `openapi.yaml` y su estructura inicial.

---

#### Clase 1.2: Modelos Reutilizables y Endpoints Principales (40 minutos) 👤

**Contenido Teórico:**
La modularidad es vital. Para evitar la repetición de código y esquemas, definiremos nuestros modelos de datos en el bloque `components/schemas`. Esto nos permitirá reutilizar la definición del objeto `User` y del `UserRole` en múltiples *endpoints*.

**Observaciones del Instructor:**
* **Consejo de experto:** La consistencia en el diseño es la piedra angular de una buena API. Usar `components` es la mejor práctica para lograrlo.
* **La regla de oro:** Si un esquema de datos se usa en más de una operación, debe ser un componente.

**Ejemplo Práctico:**
* Añade el bloque **`components/schemas`**.
* Define el esquema `User`, incluyendo campos como `username`, `email`,`birthdate`, `password` (con validación de `minLength`, `maxLength`, etc.) y `role` como un *enum* con los valores 'admin', 'editor' y 'viewer'.
* Define los *endpoints* principales en el bloque **`paths`**:
    * **`POST /users`**: Para crear un usuario. Usa `requestBody` y `response 201`.
    * **`GET /users`**: Para listar usuarios. Usa `response 200` y define un *array* de usuarios.
    * **`GET /users/{id}`**: Para ver un usuario específico. Define el parámetro de ruta (`{id}`) y las respuestas `200` y `404`.

**Estructura Pedagógica:**
1.  Introducción a `components` y la reutilización de esquemas.
2.  Definición detallada del esquema `User` y `UserRole`.
3.  Implementación de los *endpoints* de lectura y creación.

---

#### Clase 1.3: Autenticación y Autorización en el Contrato (40 minutos) 🔑

**Contenido Teórico:**
El control de acceso es una característica central de este proyecto. Definiremos el *endpoint* de autenticación y los esquemas de seguridad que usarán los demás *endpoints*. Usaremos **JWT (JSON Web Tokens)** como el método de autenticación.

**Observaciones del Instructor:**
* **La diferencia crucial:** La **autenticación** es "quién eres" (validar credenciales). La **autorización** es "qué puedes hacer" (verificar permisos). En este proyecto, ambas se integrarán.
* **Visión *full-stack*:** El *frontend* sabrá qué permisos tiene el usuario una vez que el token JWT sea devuelto en el *login*.

**Ejemplo Práctico:**
* En el bloque `paths`, añade el *endpoint* **`POST /auth/login`**. Define un `requestBody` para las credenciales y un `response 200` que devuelva un token JWT.
* En el bloque `components/securitySchemes`, define el esquema de seguridad **`bearerAuth`** para JWT.
* Añade la propiedad `security` a cada operación en los *endpoints* de usuarios (`GET`, `PUT`, `DELETE`) para protegerlos.
* Documenta las respuestas de error comunes como `401 Unauthorized` (token inválido) y `403 Forbidden` (permiso denegado).

**Estructura Pedagógica:**
1.  Conceptos de autenticación y autorización.
2.  Definición del *endpoint* de *login*.
3.  Configuración de `securitySchemes` para JWT.
4.  Protección de los *endpoints* principales.

---

### Módulo 2: Herramientas de Prototipado y Desarrollo

#### Clase 2.1: Prototipado Rápido con Mock Servers (40 minutos) 🤖

**Contenido Teórico:**
Con nuestro contrato listo, podemos crear un **servidor *mock*** para simular el comportamiento de la API. Esto permite al equipo de *frontend* comenzar a desarrollar las interfaces sin esperar el *backend*. Utilizaremos **Prism CLI** para esta tarea.

**Observaciones del Instructor:**
* **Valor agregado:** Este paso reduce drásticamente los tiempos de espera y acelera la detección de problemas de diseño en la etapa más temprana.
* **Un profesional lo sabe:** Un buen desarrollador *full-stack* no espera a que un lado termine para empezar a trabajar en el otro. El *mocking* hace posible este desarrollo en paralelo.

**Ejemplo Práctico:**
* Añade **ejemplos (`examples`)** a tus esquemas en el `openapi.yaml` para que el *mock* sepa qué datos retornar.
* Instala Prism CLI: `npm install -g @stoplight/prism-cli`.
* Inicia el servidor *mock* desde tu terminal: `prism mock openapi.yaml`.

**Estructura Pedagógica:**
1.  El concepto de *mocking* y sus beneficios.
2.  Configuración de ejemplos en el `openapi.yaml`.
3.  Uso de Prism CLI para levantar el servidor *mock*.

---

#### Clase 2.2: Construcción del Backend con Node.js y Express (40 minutos) 🏗️

**Contenido Teórico:**
Es hora de construir la API real. Configuraremos un servidor Express, lo conectaremos a **MongoDB** con Mongoose y crearemos los controladores que implementarán la lógica de negocio de los *endpoints* definidos en la especificación.

**Observaciones del Instructor:**
* **Un mapa de ruta:** Tu `openapi.yaml` es tu mapa de ruta. Cada ruta en Express debe corresponder exactamente a una operación en el `openapi.yaml`. Si no, estás rompiendo el contrato.
* **Mejores prácticas:** Estructura tu proyecto en carpetas lógicas (`models`, `routes`, `controllers`, `middlewares`) para mantener el código organizado y escalable.

**Ejemplo Práctico:**
* Inicializa tu proyecto con `npm init -y`.
* Instala las dependencias principales: `npm install express mongoose dotenv`.
* Crea el archivo de conexión a MongoDB.
* Define el modelo `User` con Mongoose, reflejando el esquema de OpenAPI.
* Crea un archivo de rutas (`userRoutes.js`) y un controlador (`userController.js`) para manejar las operaciones CRUD.

**Estructura Pedagógica:**
1.  Introducción a la implementación del *backend*.
2.  Configuración del entorno de Node.js.
3.  Conexión a MongoDB y creación del modelo Mongoose.
4.  Estructuración de rutas y controladores.

---

#### Clase 2.3: Validación Automática con `express-openapi-validator` (40 minutos) ✅

**Contenido Teórico:**
Para garantizar que las peticiones y respuestas cumplan siempre con el contrato, integraremos el *middleware* **`express-openapi-validator`**. Esta herramienta automatiza la validación, protegiendo tu API de datos malformados y reduciendo la necesidad de validaciones manuales.

**Observaciones del Instructor:**
* **La red de seguridad:** Este *middleware* es una red de seguridad vital. Atrapa errores de validación antes de que lleguen a la lógica de tu negocio.
* **El lugar correcto:** Asegúrate de registrar el *middleware* en el lugar correcto del flujo de Express para que pueda interceptar las peticiones a tiempo.

**Ejemplo Práctico:**
* Instala el validador: `npm install express-openapi-validator`.
* En tu archivo principal de Express, carga el `openapi.yaml` y registra el *middleware* `OpenApiValidator` en tu `app`.
* Prueba a enviar una petición `POST /users` con un *email* incorrecto o un `role` que no está en el *enum*. Confirma que el validador retorna un error `400 Bad Request`.

**Estructura Pedagógica:**
1.  Necesidad de validación en tiempo de ejecución.
2.  Introducción a `express-openapi-validator`.
3.  Configuración e integración en el proyecto.
4.  Demostración de su funcionalidad.

---

#### Clase 2.4: Seguridad y Autorización por Roles (40 minutos) 🔒

**Contenido Teórico:**
Ahora implementaremos la lógica de seguridad. Usaremos **JWT** para autenticar usuarios y un *middleware* personalizado para la **autorización por roles**. Este *middleware* revisará el rol del usuario en el token y decidirá si tiene permiso para acceder a una ruta específica.

**Observaciones del Instructor:**
* **Una API no es segura por defecto:** La seguridad debe ser una consideración desde el diseño, no una ocurrencia tardía. La arquitectura de *middlewares* de Express es perfecta para esto.
* **Poder y control:** El *middleware* de autorización es tu control de acceso. Te permitirá aplicar reglas como "solo un `admin` puede eliminar un usuario".

**Ejemplo Práctico:**
* Instala las librerías necesarias: `npm install jsonwebtoken bcrypt`.
* Crea la ruta `POST /auth/login` que verifique las credenciales y genere un token JWT.
* Crea un *middleware* de autenticación que verifique el token en las peticiones protegidas.
* Crea un *middleware* de roles que use la información del token para autorizar la acción.
* Aplica los *middlewares* a las rutas correspondientes: por ejemplo, la ruta `DELETE /users/{id}` solo será accesible para el rol `admin`.

**Estructura Pedagógica:**
1.  Repaso del flujo de JWT.
2.  Creación de los *endpoints* de autenticación.
3.  Implementación del *middleware* de autenticación.
4.  Implementación del *middleware* de autorización.

---

### Módulo 3: Automatización y Mantenimiento

#### Clase 3.1: Pruebas Automatizadas con Newman (40 minutos) 🧪

**Contenido Teórico:**
La automatización de pruebas es la última pieza de nuestro flujo. Usaremos **Postman** para crear una colección de pruebas y **Newman** para ejecutarlas desde la línea de comandos, asegurando que la API se comporte como se espera.

**Observaciones del Instructor:**
* **Por qué es crucial:** Las pruebas automatizadas previenen la regresión. Cada vez que cambies el código, puedes ejecutar todas las pruebas con un solo comando para asegurarte de que nada se rompió.
* **Valor en el equipo:** Esta colección de pruebas puede ser compartida con el equipo de *frontend* para que ellos también validen sus implementaciones contra el *backend*.

**Ejemplo Práctico:**
* Crea una colección en Postman para tu API de usuarios.
* Para cada *endpoint*, crea una prueba que verifique el *status code* y el formato de la respuesta. Por ejemplo, en `GET /users`, verifica que la respuesta sea un *array* y que el *status code* sea `200`.
* Exporta la colección de Postman como un archivo JSON.
* Instala Newman: `npm install -g newman`.
* Ejecuta las pruebas desde la terminal: `newman run <nombre-de-tu-coleccion>.json`.

**Estructura Pedagógica:**
1.  Importancia de la automatización de pruebas.
2.  Creación de pruebas en Postman.
3.  Introducción a Newman y su integración.
4.  Ejecución de las pruebas.

---

#### Clase 3.2: Futuro del Proyecto y Próximos Pasos (40 minutos) 📈

**Contenido Teórico:**
En esta última clase, revisaremos lo aprendido y discutiremos cómo este módulo de usuarios puede ser la base para futuros proyectos. Exploraremos la escalabilidad de la API y cómo el enfoque API First facilita la integración de nuevas funcionalidades.

**Observaciones del Instructor:**
* **La visión a largo plazo:** No solo construimos un proyecto, construimos una base sólida. Los módulos de autenticación y autorización pueden ser la columna vertebral de cualquier aplicación, como un *ecommerce* o un SaaS.
* **El objetivo final:** La metodología API First nos preparó para el futuro. Añadir un *endpoint* de `products` o `orders` será un proceso simple, ya que el flujo y la validación están definidos.

**Estructura Pedagógica:**
1.  Recapitulación del aprendizaje.
2.  Discusión de la escalabilidad y mantenimiento.
3.  Ideas de integración para un *ecommerce*.
4.  Resumen de los beneficios de la metodología.
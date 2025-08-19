# Guía de Contribución

Este documento describe las convenciones y guías de estilo para contribuir a este proyecto.

## Sistema de Módulos

Este proyecto utiliza Módulos de ES (`import`/`export`). Por favor, evita el uso de `require`/`module.exports`.

## Convenciones de Nombrado de Archivos

Para mantener la consistencia en todo el proyecto, por favor sigue las siguientes convenciones de nombrado de archivos:

*   **Modelos:** Los archivos de modelos de Mongoose deben seguir el formato `[nombre-del-modelo].model.js`. Por ejemplo, `user.model.js`.
*   **Rutas:** Los archivos de rutas de Express deben seguir el formato `[recurso].routes.js`. Por ejemplo, `users.routes.js`.
*   **Controladores:** Los archivos de controladores deben seguir el formato `[recurso].controller.js`. Por ejemplo, `users.controller.js`.



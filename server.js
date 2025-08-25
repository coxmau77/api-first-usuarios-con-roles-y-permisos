import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import * as OpenApiValidator from "express-openapi-validator";
import connectDB from "./config/db.js";
import usersRoutes from "./routes/users.routes.js";

// Conectar a la base de datos
connectDB();

const app = express();
app.use(express.json());

// Obtener el __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware de OpenAPI Validator
app.use(
  OpenApiValidator.middleware({
    apiSpec: path.join(__dirname, "openapi.yaml"),
    validateRequests: true,
    validateResponses: true,
  })
);

// Rutas de la API
app.use("/users", usersRoutes);

// Middleware de manejo de errores del validador
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}/`)
);

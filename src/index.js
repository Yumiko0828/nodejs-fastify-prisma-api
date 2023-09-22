import Fastify from "fastify";
import "./db.js";

// Settings
const app = Fastify();
const port = process.env.PORT || 3000;

// Routes
app.register(await import("./routes/api.routes.js"), { prefix: "/api" });

// Listen
app
  .listen({ port })
  .then(() => {
    console.log("Server running on port:", port);
  })
  .catch((e) => {
    app.log.error(e);
  });

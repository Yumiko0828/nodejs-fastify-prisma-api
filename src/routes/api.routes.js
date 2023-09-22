import {
  deleteTask,
  getTask,
  getTasks,
  newTask,
  updateTask,
} from "../controllers/tasks.controllers.js";

/**
 * @param {import("fastify").FastifyInstance} router
 */
export default (router, opts, done) => {
  // Get all tasks
  router.get("/tasks", getTasks);

  // Get a task by Id
  router.get("/task/:id", getTask);

  // Create new task
  router.post("/task", newTask);

  // Update a task by Id
  router.put("/task/:id", updateTask);

  // Delete a task by Id
  router.delete("/task/:id", deleteTask);

  done();
};

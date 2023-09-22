import { prisma } from "../db.js";

/**
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} reply
 */
export const getTasks = async (req, reply) => {
  try {
    const tasks = await prisma.task.findMany();

    reply.send(tasks);
  } catch (e) {
    console.error(e);
    reply.status(500).send({
      error: e.message,
    });
  }
};

/**
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} reply
 */
export const getTask = async (req, reply) => {
  const { id } = req.params;

  if (!id)
    return reply.status(400).send({
      message: "Missing task id",
    });

  const task = await prisma.task
    .findFirst({
      where: {
        id,
      },
    })
    .catch((e) => {
      if (/[Mm]alformed [Oo]bject[IDid]/.test(e.message))
        return reply.status(400).send({
          message: "Invalid task id",
        });

      return Promise.reject(e);
    });

  if (!task)
    return reply.status(404).send({
      message: "Unknown task",
    });

  reply.send(task);
};

/**
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} reply
 */
export const newTask = async (req, reply) => {
  try {
    if (!req.body)
      return reply.status(400).send({
        message: "Missing request body",
      });

    const { title, content, author, done } = req.body;

    if (!title || !author)
      return reply.status(400).send({
        message: "Missing properties in request body!",
      });

    await prisma.task.create({
      data: {
        title,
        content,
        author,
        done,
      },
    });

    reply.send({ message: "ok!" });
  } catch (e) {
    console.log(e);
    reply.status(500).send({
      error: e.message,
    });
  }
};

/**
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} reply
 */
export const updateTask = async (req, reply) => {
  try {
    const { id } = req.params;

    if (!id)
      return reply.status(400).send({
        message: "Missing task id",
      });
    if (!req.body)
      return reply.status(400).send({
        message: "Missing request body",
      });

    const { title, content, done } = req.body;

    const task = await prisma.task
      .update({
        where: {
          id,
        },
        data: {
          title,
          content,
          done,
        },
      })
      .catch((e) => {
        if (/[Mm]alformed [Oo]bject[IDid]/.test(e.message))
          return reply.status(400).send({
            message: "Invalid task id",
          });

        return Promise.reject(e);
      });

    reply.send(task);
  } catch (e) {
    console.error(e);
    reply.status(500).send({
      error: e.message,
    });
  }
};

/**
 * @param {import("fastify").FastifyRequest} req
 * @param {import("fastify").FastifyReply} reply
 */
export const deleteTask = async (req, reply) => {
  const { id } = req.params;

  if (!id)
    return reply.status(400).send({
      message: "Invalid request params",
    });

  const task = await prisma.task
    .delete({
      where: {
        id,
      },
    })
    .catch((e) => {
      if (/[Mm]alformed [Oo]bject[IDid]/.test(e.message))
        return reply.status(400).send({
          message: "Invalid task id",
        });

      return Promise.reject(e);
    });

  reply.send(task);
};

import express from "express";
import {
	allPosts,
	createPost,
	singlePost,
	updatePost,
	deletePost,
} from "../controllers/blogController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Blog
 *   description: Blog post management
 */

// Create a new blog post
/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Create a new blog post
 *     tags: [Blog]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [message, author]
 *             properties:
 *               formData:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "This is a new blog post"
 *                   author:
 *                     type: string
 *                     example: "John Doe"
 *     responses:
 *       200:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Blog'
 */

router.post("/", createPost);

// Get all blog posts
/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Blog]
 *     responses:
 *       200:
 *         description: List of blog posts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Blog'
 */
router.get("/", allPosts);

// Get a single blog post
/**
 * @swagger
 * /api/blogs/{postID}:
 *   get:
 *     summary: Get a single blog post by ID
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: postID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the blog post
 *     responses:
 *       200:
 *         description: Blog post data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Blog'
 */
router.get("/:postID", singlePost);

// Update a blog post
/**
 * @swagger
 * /api/blogs/{postID}:
 *   put:
 *     summary: Update a blog post
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: postID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the blog post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               formData:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Updated blog message"
 *                   author:
 *                     type: string
 *                     example: "Jane Doe"
 *     responses:
 *       200:
 *         description: Blog post updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 */

router.put("/:postID", updatePost);

// Delete a blog post
/**
 * @swagger
 * /api/blogs/{postID}:
 *   delete:
 *     summary: Delete a blog post
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: postID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the blog post
 *     responses:
 *       200:
 *         description: Blog post deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 */

router.delete("/:postID", deletePost);

// Blog schema definition
/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         message:
 *           type: string
 *         author:
 *           type: string
 *         date:
 *           type: string
 *           format: date-time
 */

export default router;

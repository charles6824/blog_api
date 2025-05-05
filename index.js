import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import blogRoute from "./routes/blog.js"
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import connectDB from "./database/db.js";

dotenv.config();
const __dirname = path.resolve();
connectDB().then();

const app = express();

const swaggerOptions = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "Choice and Lifestyle House API Docs",
			version: "1.0.0",
			description: "Blog API for Choice and Lifestyle House",
		},
		servers: [
			{
				url:
					process.env.NODE_ENV === "Development"
						? `http://localhost:${process.env.PORT}`
						: "https://blog-api-liart.vercel.app",
			},
		],
		components: {
			securitySchemes: {
				BearerAuth: {
					type: "http", // <-- Change to http
					scheme: "bearer",
					bearerFormat: "JWT", // <-- Ensure JWT format
					description: "Enter JWT Bearer token in format: Bearer <your_token>",
				},
			},
		},
		security: [
			{
				BearerAuth: [],
			},
		],
	},
	apis: ["./routes/**/*.js"],
};

const corsOptions = {
	origin:
		process.env.NODE_ENV === "Development"
			? `http://localhost:${process.env.PORT}`
			: "https://blog-api-liart.vercel.app",
	methods: "GET,PUT,POST,DELETE",
	credentials: true,
	allowedHeaders: ["Authorization", "Content-Type"], // Ensure Authorization is allowed
	optionsSuccessStatus: 204,
};

app.use(cors());
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use("/test", (req, res) => {
	res.send("Server running successfully");
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(
	"/api-docs",
	swaggerUi.serve,
	swaggerUi.setup(swaggerDocs, {
		swaggerOptions: {
			persistAuthorization: true, // Keeps token between page refreshes
		},
	})
);

// Serve Swagger UI static files explicitly
app.use(
	"/api-docs",
	express.static(path.join(__dirname, "node_modules/swagger-ui-dist"))
);

app.use("/api/blogs", blogRoute);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

import cors, { CorsOptions } from 'cors';
import { Express } from 'express';

export function configureCors(app: Express) {
    // Cross-Origin Resource Sharing
    const corsOptions: CorsOptions = {
        origin: '*', // Allow all origins (useful for local development; not recommended for production)
        methods: ['GET', 'PATCH', 'DELETE', 'PUT', 'POST'],
        allowedHeaders: ['Content-Type'], // Add allowed headers if needed
        maxAge: 600,
    };

    app.use(cors(corsOptions));
}

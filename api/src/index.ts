import path from 'node:path';       // path nativo nodejs
import express from 'express';
import mongoose from 'mongoose';        // ODM

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')       // CONNECT DB
    .then(() => {
        const app = express();
        const port = 3001;

        app.use('/uploads', express.static(path.resolve(__dirname, '../', 'uploads')));     // caminho relativo para imagens estáticas
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('Erro ao conectar no mongodb'));

import path from 'node:path';
import http from 'node:http';

import express from 'express';
import mongoose from 'mongoose'; // ODM
import { config } from 'dotenv';
import { Server } from 'socket.io';
import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

config();
const { MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT } = process.env;
const url =
  `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGOHOST}:${MONGOPORT}` ||
  'localhost:27017';

mongoose
  .connect(url)

  .then(() => {
    const port = 8000 || process.env.PORT;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '../', 'uploads'))
    ); // caminho relativo para imagens estáticas
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));

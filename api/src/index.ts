import path from 'node:path';       // path nativo nodejs
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';        // ODM
import { Server } from 'socket.io';

import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

/* mongoose.connect('mongodb://localhost:27017')       // CONNECT DB - docker */
mongoose.connect('mongodb://mongo:0tkMin4WiDOng4PWEe0v@containers-us-west-122.railway.app:6628')      // CONNECT DB

  .then(() => {
    const port = 3001;

    app.use((req, res, next) =>  {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      next();
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '../', 'uploads')));     // caminho relativo para imagens estáticas
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no mongodb'));

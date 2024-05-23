import { FotoModel } from '../Models/pg/fotos.js'
import express, { json } from 'express'; 
import { createFotoRouter } from '../Controllers/routes.js';
import { corsMiddleware } from '../middlewares/cors.js';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/api/fotos', createFotoRouter({ fotoModel:FotoModel }))
app.use('/(.*)', (req, res) => {
  res.sendFile(path.join(__dirname, '/Views/index.html'));
})

export default app

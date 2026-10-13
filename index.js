import express from "express";
import routes from './routes/user.js';
import { errorHandle } from './middlewares/errorHandler.js';

const logger = (req, res, next) => {
  const startTime = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - startTime;
    console.log(`${req.method} ${req.path} ${res.statusCode} ${duration}ms`);
  })

  next();
}


const app = express();

app.use(express.json());

app.use(logger);

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok'
  })
})

app.use('/api', routes);

app.use(errorHandle);

app.listen(3000, () => {
  console.log("server start")
})
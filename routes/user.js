import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { AppError } from "../common/index.js";

const router = Router();

const auth = (req, _res, next) => {
  if (req.headers.token !== '123456') {
    return next(new AppError('Unauthorized', 401));
  }
  req.user = {
    id: 1,
    name: "X"
  }
  next();
}

router.get('/hello', (req, res) => {
  const name = req.query.name;

  res.json({
    status: 'ok',
    message: `hello ${name}`
  })
})

router.post('/user/:id', auth, userController.updateUser)

export default router;
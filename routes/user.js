import { Router } from "express";
import userController from "../controllers/user.controller";

const router = Router();

const auth = (req, res, next) => {
  if (req.headers.token !== '123456') {
    return res.status(401).json({
      code: 401,
      message: 'Unauthorized'
    })
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

router.post('/user/:id', auth, userController)

export default router;
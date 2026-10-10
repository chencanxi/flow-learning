import { Router } from "express";
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

router.post('/user/:id', auth, (req, res) => {
  const id = req.params.id;
  const nickname = req.body.nickname;
  const token = req.headers.token;

  res.json({
    id,
    nickname,
    token
  })
})

export default router;
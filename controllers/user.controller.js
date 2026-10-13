import userService from "../services/user.service.js";
import { AppError } from "../common/index.js";

const updateUser = (req, res, next) => {
  const id = req.params.id;
  const nickname = req.body.nickname;
  const user = req.user;

  if (!nickname) {
    const err = new AppError('nickname required', 400);
    return next(err);
  }

  // 暂时可以不用async/await
  const result = userService.updateUser({ id, nickname, operator: user });

  res.json({
    data: result,
  })
}

export default {
  updateUser
}
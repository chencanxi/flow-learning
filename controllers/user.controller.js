import userService from "../services/user.service";

const updateUser = (req, res) => {
  const id = req.params.id;
  const nickname = req.body.nickname;
  const user = req.user;

  // 暂时可以不用async/await
  const result = userService.updateUser({ id, nickname, operator: user });

  res.json({
    data: result,
  })
}

export default {
  updateUser
}
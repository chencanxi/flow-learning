import userService from "../services/user.service";

const updateUser = (req, res) => {
  const id = req.params.id;
  const nickname = req.body.nickname;
  // 这个user我也不知道从哪来。。你给的题目里面有
  const user = req.user;

  // 暂时可以不用async/await
  const result = userService.updateUser(id, nickname, user);

  res.json({
    data: result,
  })
}

export default {
  updateUser
}
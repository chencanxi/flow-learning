import { AppError } from "../common/index.js";
const updateUser = ({ id, nickname, operator }) => {
  if (!nickname) {
    const err = new AppError('nickname required', 400);
    throw err;
  }

  return {
    id,
    nickname,
    operatorId: operator.id
  }
}

export default {
  updateUser
}
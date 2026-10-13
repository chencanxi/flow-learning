
const updateUser = ({ id, nickname, operator }) => {
  if (!nickname) {
    const err = new Error('nickname required');
    err.statusCode = 400;
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

const updateUser = (id, nickname, operator) => {
  if (!nickname) {
    throw new Error('nickname required');
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
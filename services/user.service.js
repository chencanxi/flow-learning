
const updateUser = ({ id, nickname, operator }) => {

  return {
    id,
    nickname,
    operatorId: operator.id
  }
}

export default {
  updateUser
}
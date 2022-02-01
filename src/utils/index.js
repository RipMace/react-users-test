const findUser = id => user => user.id === id

const filterUser = id => user => user.id !== id

const disableAddUser = (name = '', users, id = '') => !name.length || users.filter(filterUser(id)).some(u => u.name === name)

const checkSaveNewUser = () => Math.random() < 0.5

const onSaveUser = (onSuccess, onError, maxRetry = 2, randomizer = checkSaveNewUser) => {
  let success = false;
  let retryNum = 0;
  while (!success && retryNum < maxRetry) {
    success = randomizer()
    if (success) onSuccess()
    retryNum++
  }
  if (!success) onError();
}

export {
  disableAddUser,
  findUser,
  filterUser,
  onSaveUser,
}

import { findUser, disableAddUser, onSaveUser } from 'utils';

describe('findUser', () => {
  it('find user id', () => {
   const mock = [{ id: 1}, {id: 2}, {id: 3}]
    const myUser = mock.findIndex(findUser(1))
    expect(myUser).toBe(0);
  });

  it('find user id with string', () => {
    const mock = [{ id: 1}, {id: 'a'}, {id: 3}]
    const myUser = mock.findIndex(findUser('a'))
    expect(myUser).toBe(1);
  });
})

describe('disableAddUser', () => {
  it('cannot add empty name', () => {
    const mock = [{ id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}]
    expect(disableAddUser('', mock, )).toBe(true);
  });

  it('should fail with same name', () => {
    const mock = [{ id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}]
    expect(disableAddUser('a', mock)).toBe(true);
  });

  it('should can edit the same name', () => {
    const mock = [{ id: 1, name: 'a'}, {id: 2, name: 'b'}, {id: 3, name: 'c'}]
    expect(disableAddUser('b', mock, 2)).toBe(false);
  });
})

describe('onSaveUser', () => {
  it('should fail', () => {
    const onSuccess = jest.fn();
    const onError = jest.fn();
    onSaveUser(onSuccess, onError, 2, () => false)
    expect(onError.mock.calls.length).toBe(1);
  });

  it('should success', () => {
    const onSuccess = jest.fn();
    const onError = jest.fn();
    onSaveUser(onSuccess, onError, 2, () => true)
    expect(onSuccess.mock.calls.length).toBe(1);
  });
})

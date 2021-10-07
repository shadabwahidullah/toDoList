import deleteTask from './deleteTask';

describe('All tests on deleteTask function', () => {
  test('delete first task', () => {
    expect(deleteTask(0, [{}])).toBe(0);
  });
  test('delete second task', () => {
    expect(deleteTask(1, [{}, {}])).toBe(1);
  });
  test('delete third task', () => {
    expect(deleteTask(0, [{}, {}, {}])).toBe(2);
  });
});

import { editTask, removeCompletedTasks } from './newTask';

// this test is aimed to test status update function
describe('To check editing works fine', () => {
  test('First edit test', () => {
    expect(
      editTask({
        newDesc: 'test1',
        index: 0,
        toDoTasks: [{ desc: 'test', index: 1, completed: true }],
      }),
    ).toBe('test1');
  });
  test('Second edit test', () => {
    expect(
      editTask({
        newDesc: 'test2',
        index: 2,
        toDoTasks: [
          { desc: 'test', index: 1, completed: true },
          { desc: 'test', index: 2, completed: false },
          { desc: 'test', index: 3, completed: true },
        ],
      }),
    ).toBe('test2');
  });
  test('Third edit test', () => {
    expect(
      editTask({
        newDesc: 'test3',
        index: 1,
        toDoTasks: [
          { desc: 'test', index: 1, completed: true },
          { desc: 'test', index: 1, completed: false },
        ],
      }),
    ).toBe('test3');
  });
});

// this test is aimed to test if completed tasks are getting removed
describe('Tests removing completed tasks', () => {
  test('first test', () => {
    const mockTasks = [
      { desc: 'test', index: 1, completed: true },
      { desc: 'test', index: 2, completed: false },
      { desc: 'test', index: 3, completed: true },
    ];
    expect(removeCompletedTasks(mockTasks)).toBe(1);
  });
  test('Second test', () => {
    const mockTasks = [
      { desc: 'test', index: 1, completed: true },
      { desc: 'test', index: 2, completed: true },
      { desc: 'test', index: 3, completed: true },
    ];
    expect(removeCompletedTasks(mockTasks)).toBe(0);
  });
  test('Third test', () => {
    const mockTasks = [
      { desc: 'test', index: 1, completed: false },
    ];
    expect(removeCompletedTasks(mockTasks)).toBe(1);
  });
});

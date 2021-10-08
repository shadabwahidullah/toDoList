import { toDoTasks, statusUpdate } from './status';

describe('Completed status updated succesfully', () => {
  test('first status update', () => {
    const mockArr = [{ desc: 'test', index: 1, completed: true }];
    expect(statusUpdate(0, true, mockArr)).toEqual(true);
  });
  test('second status update', () => {
    const mockArr = [
      { desc: 'test', index: 1, completed: true },
      { desc: 'test', index: 2, completed: false },
      ,
    ];
    expect(statusUpdate(1, true, mockArr)).toEqual(true);
  });
  test('third status update', () => {
    const mockArr = [
      { desc: 'test', index: 1, completed: true },
      { desc: 'test', index: 2, completed: false },
      { desc: 'test', index: 3, completed: true },
    ];
    expect(statusUpdate(2, true, mockArr)).toEqual(true);
  });
});

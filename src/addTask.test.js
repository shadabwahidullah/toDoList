/**
 * @jest-environment jsdom
 */

import { addNewTask } from './addTask';
let spy;
beforeAll(() => {
  spy = jest.spyOn(document, 'getElementById');
});

function creatingMockElem(number) {
  let mockElem;
  mockElem = document.createElement('input');
  mockElem.type = 'text';
  mockElem.value = number;
  spy.mockReturnValue(mockElem);
  return mockElem;
}

describe('Task succesfully added', () => {
  test('first test', () => {
    const firstTest = creatingMockElem('first test');
    expect(addNewTask([], firstTest)).toBe('first test');
  });
  test('second test', () => {
    const secondTest = creatingMockElem('second test');
    expect(addNewTask([], secondTest)).toBe('second test');
  });
  test('third test', () => {
    const thirdTest = creatingMockElem('third test');
    expect(addNewTask([], thirdTest)).toBe('third test');
  });
});

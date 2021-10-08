import { editTask } from "./newTask";

describe("To check editing works fine", () => {
  test("First edit test", () => {
    expect(
      editTask({
        newDesc: "test1",
        index: 0,
        toDoTasks: [{ desc: "test", index: 1, completed: true }],
      })
    ).toBe("test1");
  });
  test("Second edit test", () => {
    expect(
      editTask({
        newDesc: "test2",
        index: 2,
        toDoTasks: [
          { desc: "test", index: 1, completed: true },
          { desc: "test", index: 2, completed: false },
          { desc: "test", index: 3, completed: true },
        ],
      })
    ).toBe("test2");
  });
  test("Third edit test", () => {
    expect(
      editTask({
        newDesc: "test3",
        index: 1,
        toDoTasks: [
          { desc: "test", index: 1, completed: true },
          { desc: "test", index: 1, completed: false },
        ],
      })
    ).toBe("test3");
  });
});

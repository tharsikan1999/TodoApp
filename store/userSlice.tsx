import create from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (id: string, newTask: string) => void;
  deleteTask: (id: string) => void;
  toggleTaskCompletion: (id: string) => void;
}

type MyPersist = (config: any, options: PersistOptions<TodoStore>) => any;

const useTodoStore = create<TodoStore>(
  (persist as MyPersist)(
    (set: (partial: (state: TodoStore) => Partial<TodoStore>) => void) => ({
      tasks: [],
      addTask: (task: Task) =>
        set((state: TodoStore) => ({ tasks: [...state.tasks, task] })),
      editTask: (id: string, newTask: string) =>
        set((state: TodoStore) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, text: newTask } : task
          ),
        })),
      deleteTask: (id: string) =>
        set((state: TodoStore) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleTaskCompletion: (id: string) =>
        set((state: TodoStore) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),
    }),
    {
      name: "todo-storage",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useTodoStore;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { genRandomId } from '../utils/utils';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
}

type TodosState = {
  list: Todo[];
  storFn: (v: Todo[]) => void;
}

const initialState: TodosState = {
  list: [],
  storFn: (v) => { console.log('storFn v:', v); },
}

type setStorFnParams = {
  storFn: (v: Todo[]) => void;
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: genRandomId(),
        title: action.payload,
        completed: false,
      });
      state.storFn(state.list);
    },
    setStorFn(state, action: PayloadAction<setStorFnParams>) {
      state.storFn = action.payload.storFn
    },
    setTodosState(state, action: PayloadAction<Todo[]>) {
      state.list = action.payload
    },
    toggleComplete(state, action: PayloadAction<string>) {
      const toggledTodo = state.list.find(todo => todo.id === action.payload);
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed;
      state.storFn(state.list);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter(todo => todo.id !== action.payload);
      state.storFn(state.list);
    }
  },
});

export const { addTodo, setTodosState, toggleComplete, removeTodo, setStorFn } = todoSlice.actions;

export default todoSlice.reducer;
import { combineReducers } from 'redux';
import { 
  Action, 
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from './actions';

interface Todo {
  text: string;
  completed: boolean;
  index: number;
}

// tslint:disable-next-line:no-any
const todos = (state: any = [], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos, 
          {
            text: action.text,
            completed: false,
            index: state.todos.length
          }
        ]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(
          (todo: Todo, index: number) => {
            if (todo.index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              });
            } else {
              return todo;
            }
          }
        )
      });
    default:
      return state;
  }
};

const visibilityFilter = 
  (state = VisibilityFilters.SHOW_ALL, action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { 
        visibilityFilter: action.filter 
      });
    default:
      return state;
  }
};

// tslint:disable-next-line:no-any
export const todoApp = combineReducers({
  visibilityFilter,
  todos
});
import { combineReducers } from 'redux';
import { Todo } from './Todo';
import { 
  Action, 
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from './actions';

// tslint:disable-next-line:no-any
const todos = (state: any = [], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
       return [
          ...state, 
          {
            text: action.text,
            completed: false,
            index: state.length
          }
        ];
    case TOGGLE_TODO:
      return state.map(
        (todo: Todo, index: number) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

const visibilityFilter = 
  (state = VisibilityFilters.SHOW_ALL, action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return  action.filter; 
    default:
      return state;
  }
};

// tslint:disable-next-line:no-any
export const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
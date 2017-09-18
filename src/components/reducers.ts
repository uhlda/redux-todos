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

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

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

// tslint:disable-next-line:no-any
export const todoApp = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, { 
        visibilityFilter: action.filter 
      });
    case ADD_TODO:
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state, action)
      });
    default:
      return state;
  }
};

// // tslint:disable-next-line:no-any
// export function todoApp(state: any = initialState, action: Action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter
//       });
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false 
//           }
//         ]
//       });
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
// // tslint:disable-next-line:no-any
//         todos: state.todos.map((todo: any, index: number) => {
//           if (index === action.index) {
//             return Object.assign({}, todo, {
//               completed: !todo.completed
//             });
//           }
//         })
//       });
//     default:
//       return state;
//   }
// }

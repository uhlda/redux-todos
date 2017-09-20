import { createStore } from 'redux';
import todoApp from './reducers';

import { 
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
 } from './actions';

let store = createStore(todoApp);

// tslint:disable-next-line:no-console
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
// tslint:disable-next-line:no-console
    console.log(store.getState());
});

store.dispatch(addTodo('action number 1'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();
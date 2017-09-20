/*
 * Action Types
 */
 
 export const ADD_TODO: string = 'ADD_TODO';
 export const TOGGLE_TODO: string = 'TOGGLE_TODO';
 export const SET_VISIBILITY_FILTER: string = 'SET_VISIBILITY_FILTER';

 /*
e* Action Type
 */

 export class Action {
    type: string;
    index?: number;
    text?: string;
    filter?: string;
 }
 
 /*
 * other constants
 */ 

 export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
 };
 
 /*
 * Action list
 */

 export const actions: Action[] = [
    { type: 'ADD_TODO', text: 'Go to swimming pool' },
    { type: 'TOGGLE_TODO', index: 1 },
    { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
  ];

  /*
   * action creators
   */
  
 export const addTodo = (text: string) => {
   return { 
     type: ADD_TODO, text 
   };
 };
  
 export function toggleTodo(index: number) {
    return { type: TOGGLE_TODO, index };
 }
  
 export function setVisibilityFilter(filter: string) {
    return { type: SET_VISIBILITY_FILTER, filter };
 }
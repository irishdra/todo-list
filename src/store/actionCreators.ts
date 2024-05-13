
import * as actionTypes from './actionTypes';
import { TodoAction } from '../types/Store';
import { Todo } from '../types/Todo';

export const changeTodoState = (todo: Todo) => {
    const action: TodoAction = {
        type: actionTypes.CHANGE_TODO_STATE,
        todo,
    };

    return action;
};

export const addTodo = (todo: Todo) => {
    const action: TodoAction = {
        type: actionTypes.ADD_TODO,
        todo,
    };

    return action;
};

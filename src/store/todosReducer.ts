import { v4 as uuidv4 } from 'uuid';

import * as actionTypes from './actionTypes';
import { TodoAction, TodoStore } from '../types/Store';
import { Todo } from '../types/Todo';
import { TODO_DONE_STATE } from '../constants/Todo';

export const initialTodos: TodoStore = {
    todos:
    [
        {
            id: '71927174-8330-458e-9be2-df22b7125399',
            title: 'Create documentation for project',
            description: 'Readme.md will be enough',
            state: 'progress',
        },
        {
            id: 'ebec7a54-13c7-4e77-8e42-ab2f6a69db79',
            title: 'Test TODOs app',
            description: 'Find bugs and fix them',
            state: 'progress',
        },
        {
            id: '2e1e338c-c971-4d4d-8d22-4eedf72c760e',
            title: 'List TODOs',
            description: 'Display todos to user',
            state: 'done',
        },
        {
            id: 'f8222ad7-8737-4dcf-a900-aa3be0bbafda',
            title: 'Feature: add new TODO',
            description: 'Add functionality for the adding new TODO to list',
            state: 'done',
        },
    ],
};

const todosReducer = (
    state: TodoStore = initialTodos,
    action: TodoAction,
): TodoStore => {
    switch(action.type) {
        case actionTypes.CHANGE_TODO_STATE: {
            const filteredTodos: Todo[] = state.todos.filter(
                todo => todo.id !== action.todo.id
            );
            const updatedTodos: Todo[] = action.todo.state === TODO_DONE_STATE ?
                [...filteredTodos, action.todo] :
                [action.todo, ...filteredTodos]

            return {
                ...state,
                todos: updatedTodos
            }
        };
        case actionTypes.ADD_TODO: {
            const newTodo: Todo = {
                id: uuidv4(),
                title: action.todo.title,
                state: action.todo.state,
                description: action.todo.description

            }

            return {
                ...state,
                todos: [newTodo, ...state.todos],
            }
        };
    };

    return state;
};

export default todosReducer;

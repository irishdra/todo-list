import { Todo } from './Todo';

export type TodoStore = {
    todos: Todo[];
};

export type TodoAction = {
    type: string;
    todo: Todo;
};

export type TodoState = 'progress' | 'done';

export interface Todo {
    id?: string;
    title: string;
    description: string;
    state: TodoState;
};

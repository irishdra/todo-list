import React, { useCallback } from 'react';
import { MantineProvider, Flex, Title } from '@mantine/core';

import { useAppSelector, useAppDispatch } from './store/hooks';
import { Card } from './components/Card';
import { Todo } from './types/Todo';
import { addTodo, changeTodoState } from './store/actionCreators';
import { AddCard } from './components/AddCard';

const App = () => {
    const todos = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();

    const updateTodoState = useCallback((todo: Todo) => dispatch(changeTodoState(todo)), [dispatch]);
    const addNewTodo = useCallback((todo: Todo) => dispatch(addTodo(todo)), [dispatch]); 

    return (
        <MantineProvider>
            <Flex
                gap="md"
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                mb="md"
            >
                <Title mt="sm">
                    TODOs
                </Title>
                <AddCard addNewTodo={addNewTodo} />
                {todos.map((todo) => (
                    <Card
                        key={todo.id}
                        todo={todo}
                        changeTodoState={updateTodoState}
                    />
                ))}
            </Flex>
        </MantineProvider>
    );
};

export default App;
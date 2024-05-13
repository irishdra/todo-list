
import React, { useCallback } from 'react';
import { Card as MantineCard, Text, Badge, Checkbox, Flex } from '@mantine/core';

import { Todo } from '../types/Todo';
import { TODO_DONE_STATE, TODO_PROGRESS_STATE } from '../constants/Todo';

const BadgeColors = {
    todo: 'teal',
    progress: 'yellow',
    done: 'blue',
};

type CardProps = {
    todo: Todo;
    changeTodoState: (todo: Todo) => void;
};

export const Card: React.FC<CardProps> = ({
    todo,
    changeTodoState,
}) => {
    const updateState = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const todoNewState = event.currentTarget.checked ? TODO_DONE_STATE : TODO_PROGRESS_STATE;
        const updateInfo: Todo = {
            ...todo,
            state: todoNewState
        };

        changeTodoState(updateInfo);
    }, [changeTodoState, todo])

    return (
        <MantineCard
            shadow="sm"
            p="lg"
            radius="md"
            withBorder
            w={300}
            ta="center"
        >
            <Text
                fw={500}
                {...todo.state === TODO_DONE_STATE && {
                    td: 'line-through',
                    c: 'dimmed',
                }}
            >
                {todo.title}
            </Text>
            <Flex
                mt="md"
                mb="xs"
                justify="space-evenly"
            >
                <Badge color={BadgeColors[todo.state]} variant="light">
                    {todo.state}
                </Badge>
                <Checkbox
                    checked={todo.state === TODO_DONE_STATE}
                    onChange={updateState}
                />
            </Flex>
            <Text
                size="sm"
                {...todo.state === TODO_DONE_STATE && {
                    c: 'dimmed',
                }}
            >
                {todo.description}
            </Text>
        </MantineCard>
    )
};

import React, { useCallback } from 'react';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

import { TODO_PROGRESS_STATE } from '../constants/Todo';
import { Todo, TodoState } from '../types/Todo';

type AddTodoFormProps = {
    addNewTodo: (todo: Todo) => void;
    modalClose: () => void;
};

export const AddTodoForm: React.FC<AddTodoFormProps> = ({
    addNewTodo,
    modalClose,
}) => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            title: '',
            state: TODO_PROGRESS_STATE as TodoState,
            description: ''
        },
        validate: {
            title: (value) => value.length > 3 ? null : 'Title must have at least 3 letters.',
        },
    });

    const onSubmitForm = useCallback((values: Todo) => {
        addNewTodo(values);
        modalClose();
    }, [addNewTodo, modalClose]);

    return (
        <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit(onSubmitForm)}>
                <TextInput
                    withAsterisk
                    label="Title"
                    placeholder="TODO 1"
                    key={form.key('title')}
                    {...form.getInputProps('title')}
                />
                <TextInput
                    label="Description"
                    placeholder="Provide description for TODO"
                    key={form.key('description')}
                    {...form.getInputProps('description')}
                />
                <Group justify="flex-end" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
};

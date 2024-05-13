import React from 'react';
import { Card as MantineCard, Text, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { AddTodoForm } from './AddTodoForm';
import { Todo } from '../types/Todo';

type AddCardProps = {
    addNewTodo: (todo: Todo) => void;
};

export const AddCard: React.FC<AddCardProps> = ({ addNewTodo }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="New TODO"
                centered
            >
                <AddTodoForm addNewTodo={addNewTodo} modalClose={close} />
            </Modal>
            <MantineCard
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                w={300}
                ta="center"
                style={{cursor: 'pointer'}}
                onClick={open}
            >
                <Text>Add new TODO</Text>
            </MantineCard>
        </>
    )
};

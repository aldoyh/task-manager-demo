import { useState } from 'react';
import { TextInput, Button, List, Text, Group, ActionIcon } from '@mantine/core';
import { IconTrash, IconCheck } from '@tabler/icons-react';
import { useTaskStore } from '../store/taskStore';

function TaskList() {
  const [newTask, setNewTask] = useState('');
  const { tasks, addTask, removeTask, toggleTask } = useTaskStore();

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <Group>
        <TextInput
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button onClick={handleAddTask}>Add Task</Button>
      </Group>
      <List mt="md" spacing="xs">
        {tasks.map((task) => (
          <List.Item
            key={task.id}
            icon={
              <ActionIcon color={task.completed ? 'teal' : 'blue'} onClick={() => toggleTask(task.id)}>
                <IconCheck size={16} />
              </ActionIcon>
            }
          >
            <Group position="apart">
              <Text style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </Text>
              <ActionIcon color="red" onClick={() => removeTask(task.id)}>
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default TaskList;
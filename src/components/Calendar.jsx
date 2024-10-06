import { useState } from 'react';
import { Calendar as MantineCalendar } from '@mantine/dates';
import { Text } from '@mantine/core';
import { useTaskStore } from '../store/taskStore';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const { tasks } = useTaskStore();

  const tasksForSelectedDate = selectedDate
    ? tasks.filter(task => {
        const taskDate = new Date(task.createdAt);
        return (
          taskDate.getDate() === selectedDate.getDate() &&
          taskDate.getMonth() === selectedDate.getMonth() &&
          taskDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    : [];

  return (
    <div>
      <MantineCalendar value={selectedDate} onChange={setSelectedDate} />
      {selectedDate && (
        <div style={{ marginTop: '1rem' }}>
          <Text weight={700}>Tasks for {selectedDate.toDateString()}:</Text>
          {tasksForSelectedDate.length > 0 ? (
            <ul>
              {tasksForSelectedDate.map(task => (
                <li key={task.id}>{task.text}</li>
              ))}
            </ul>
          ) : (
            <Text>No tasks for this date.</Text>
          )}
        </div>
      )}
    </div>
  );
}

export default Calendar;
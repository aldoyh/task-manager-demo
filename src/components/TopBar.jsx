import { Group, Title } from '@mantine/core';

function TopBar() {
  return (
    <Group position="apart" style={{ height: '100%', padding: '0 1rem' }}>
      <Title order={3}>Task Manager</Title>
    </Group>
  );
}

export default TopBar;
import { NavLink } from '@mantine/core';
import { IconCalendar, IconList } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div>
      <NavLink
        label="Tasks"
        icon={<IconList size={16} stroke={1.5} />}
        onClick={() => navigate('/')}
      />
      <NavLink
        label="Calendar"
        icon={<IconCalendar size={16} stroke={1.5} />}
        onClick={() => navigate('/calendar')}
      />
    </div>
  );
}

export default Sidebar;
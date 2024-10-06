import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppShell, Navbar, Header } from '@mantine/core';
import TaskList from './components/TaskList';
import Calendar from './components/Calendar';

function App() {
  return (
    <Router>
      <AppShell
        padding="md"
        navbar={<Navbar width={{ base: 300 }} height={500} p="xs">{/* Navbar content */}</Navbar>}
        header={<Header height={60} p="xs">{/* Header content */}</Header>}
      >
        <Switch>
          <Route exact path="/" component={TaskList} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </AppShell>
    </Router>
  );
}

export default App;
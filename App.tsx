// In App.js in a new project

import * as React from 'react';
import Routes from './src/routes/routes'
import { UserProvider } from './src/context/User';

function App() {

  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
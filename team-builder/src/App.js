import React, { useState } from 'react';
import Member from './components/Member';
import NewMember from './components/NewMember';
import './App.css';

function App() {
  const [team, setNewMember] = useState([{
    id: 1,
    name: 'Mark Workman',
    email: 'mark.workman@email.com',
    role: 'Team Leader'
  },
  {
    id: 2,
    name: 'Justin Litten',
    email: 'justin.litten@email.com',
    role: 'Team Member'
  },
  {
    id: 3,
    name: 'Matt Vulcano',
    role: 'Team Member'
  },
]);

const addNewMember = (member) => {
  setNewMember([...team, {...member, id: Date.now() }]);
};
  return (
    <div className='App'>
      <NewMember setNewMember={addNewMember} member={team} />
      <Member team={team} />
    </div>
  );
}

export default App;
import './App.css';
import React, { useState } from 'react';

const data = [
  {id: 1, name: 'Member1'},
  {id: 2, name: 'Member2'},
  {id: 3, name: 'Member3'},
  {id: 4, name: 'Member4'},
  {id: 5, name: 'Member5'}
]

function App() {
  
  const [teamMembers, setTeamMembers] = useState(data);

  return (
    <div className="App">
      {teamMembers.map(teamMember => <h1 key={teamMember.id}>{teamMember.name}</h1>)}
    </div>
  );
}

export default App;

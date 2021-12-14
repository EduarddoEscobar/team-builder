import './App.css';
import React, { useState, useEffect } from 'react';
import TeamMember from './Components/TeamMember';
import TeamMemberForm from './Components/TeamMemberForm';

const data = [
  {id: 1, name: 'Member1', email: 'member1@example.com', role: 'Frontend Developer'},
  {id: 2, name: 'Member2', email: 'member2@example.com', role: 'Backend Engineer'},
  {id: 3, name: 'Member3', email: 'member3@example.com', role: 'Designer'}
]

function App() {
  
  const initialFormValues = {name:'', email:'', role:''};

  const [teamMembers, setTeamMembers] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  useEffect(() => setTeamMembers(data), []);

  const updateForm = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }

  const submitForm = () => {
    const newTeamMember = {
      id: teamMembers.length + 1,
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }

    if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
      setError('All fields must be filled in!');
    }else{
      setTeamMembers(teamMembers.concat(newTeamMember));
      setFormValues(initialFormValues);
    }
  }
  
  return (
    <div className="App">
      <h1>Testing phase</h1>
      <TeamMemberForm values={formValues} update={updateForm} submit={submitForm}/>
      {teamMembers && teamMembers.map((tm) => <TeamMember key={tm.id} teamMember={tm} />)}
    </div>
  );
}

export default App;

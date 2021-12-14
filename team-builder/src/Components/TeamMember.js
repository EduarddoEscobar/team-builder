import React from 'react';

export default function TeamMember(props){
    const {teamMember} = props;

    if(!teamMember){
        return <h3>TeamMember not found!</h3>;
    }

    console.log(teamMember);
    return(
        <div>
            <h2>{teamMember.name}</h2>
            <p>Email: {teamMember.email}</p>
            <p>Role: {teamMember.role}</p>
        </div>
    )
}
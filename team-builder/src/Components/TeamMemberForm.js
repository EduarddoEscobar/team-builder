import React from 'react';

export default function TeamMemberForm(props){
    const {values, update, submit} = props;

    const onChange = evt => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>Name
                    <input 
                        name='name'
                        type='text'
                        maxLength='30'
                        placeholder='Enter Name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input 
                        name='email'
                        type='email'
                        placeholder='Enter Email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Role
                    <select  name='role' value={values.role} onChange={onChange}>
                        <option value=''>--Please pick a role--</option>
                        <option value='Frontend Developer'>Frontend Engineer</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Data Scientist'>Data Scientist</option>
                        <option value='Project Manager'>Project Manager</option>
                    </select>
                </label>

                <button>Submit</button>
            </div>
        </form>
    )
}
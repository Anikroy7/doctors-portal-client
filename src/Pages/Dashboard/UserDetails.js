import React from 'react';

const UserDetails = ({ user }) => {

    const { email } = user;
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button class="btn btn-xs">Make admin</button></td>
            <td><button className='btn btn-xs'>Delete</button></td>
        </tr>
    );
};

export default UserDetails;
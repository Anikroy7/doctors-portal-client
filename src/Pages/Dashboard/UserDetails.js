import React from 'react';
import { toast } from 'react-toastify';

const UserDetails = ({ user, refetch, i }) => {

    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            },

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Admin role added succsessfully')
                }
            })
    }
    return (
        <tr>
            <th>{i + 1}</th>
            <td>{email}</td>
            <td>
                {

                    role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-secondary">Make admin</button>
                }
            </td>
            <td><button className='btn btn-xs btn-outline btn-error'>Delete</button></td>

        </tr>
    );
};

export default UserDetails;
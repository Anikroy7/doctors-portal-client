import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserDetails from './UserDetails';

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-center text-accent text-xl'>All Users: {users.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <UserDetails

                                key={user._id}
                                user={user}
                            ></UserDetails>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;
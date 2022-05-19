import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `bearer ${localStorage.getItem('access-token')}`

        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl text-center text-violet-900'>Manage doctors: {doctors.length}</h3>
        </div>
    );
};

export default ManageDoctors;
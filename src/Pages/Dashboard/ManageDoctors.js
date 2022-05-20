import { set } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletedConfirmModal from './DeletedConfirmModal';
import DoctorDetails from './DoctorDetails';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `bearer ${localStorage.getItem('access-token')}`

        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-8'>
            <h3 className='text-3xl text-center text-violet-900 mb-5'>Manage doctors: {doctors.length}</h3>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorDetails
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorDetails>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <DeletedConfirmModal
                    deleteDoctor={deleteDoctor}
                    refetch={refetch}
                    setDeleteDoctor={setDeleteDoctor}
                ></DeletedConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;
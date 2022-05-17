import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);

    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user?.email}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [user])
    console.log(appointments);
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'> All Appointment: {appointments.length}</h4>
            <div class="overflow-x-auto  p-5">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, i) =>
                                <tr className='hover'>
                                    <th>{i + 1}</th>
                                    <th>{a.patient}</th>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatement}</td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;
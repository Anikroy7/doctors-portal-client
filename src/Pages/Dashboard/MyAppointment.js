import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                console.log(res);
                if (res.status === 401 || res.status === 403) {
                    navigate('/')
                    signOut(auth);
                    toast.error('You are a invalid user!!!')
                }
                return res.json()
            })
            .then(data => setAppointments(data))
    }, [user, navigate])
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, i) =>
                                <tr className=''>
                                    <th>{i + 1}</th>
                                    <th>{a.patient}</th>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatement}</td>
                                    <td>

                                        {
                                            (a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-primary btn-xs'>Pay</button></Link>
                                        }
                                        {
                                            (a.price && a.paid) && <span className='text-success'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyAppointment;
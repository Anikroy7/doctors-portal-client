import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-center text-3xl text-primary'> Welcome to Your Dashboard</h2>
                <Outlet />

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-44 bg-base-100 text-base-content">
                    <li><Link to={'/dashboard'}>Appointments </Link></li>
                    <li><Link to={'/dashboard/review'}>My Reviews</Link></li>
                    <li><Link to={'/dashboard/history'}>My history</Link></li>

                    {
                        admin && <>
                            <li><Link to={'/dashboard/users'}>All users</Link></li>
                            <li><Link to={'/dashboard/addDoctor'}>Add Doctor</Link></li>
                            <li><Link to={'/dashboard/manageDoctor'}>Manage Doctor</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
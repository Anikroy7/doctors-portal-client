import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BokkingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { name, slots, _id, price } = treatment;
    const [user] = useAuthState(auth);
    const handelFromSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        const formattedDate = format(date, 'PP')
        const booking = {
            treatementId: _id,
            treatement: name,
            patient: user.email,
            patientName: user.displayName,
            slot,
            date: formattedDate,
            price

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Your appoint is successfully booked for ${formattedDate} to ${slot}`)
                }
                else {
                    toast.error(`Your appoint is alreay booked for ${formattedDate} to ${slot}`)
                }

            })
        // for refetch 
        refetch()

        // for close modal
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking For:
                        <span> {name}</span></h3>
                    <form onSubmit={handelFromSubmit}>

                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <select name='slot' className="mt-3 select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, i) => <option
                                    key={i}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text"
                            value={user?.displayName} disabled className="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <input type="text" disabled value={user?.email} className="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <input type="text" placeholder="Phone number" className="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <input type="submit" className="input input-bordered input-accent w-full max-w-xs mt-3 btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BokkingModal;
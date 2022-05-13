import React from 'react';
import { format } from 'date-fns';

const BokkingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handelFromSubmit = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form onSubmit={handelFromSubmit}>

                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" class="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <select name='slot' class="mt-3 select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" placeholder="Full name" class="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <input type="text" placeholder="Phone number" class="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <input type="text" placeholder="Your email" class="input input-bordered input-accent w-full max-w-xs mt-3" />
                        <input type="submit" class="input input-bordered input-accent w-full max-w-xs mt-3 btn btn-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BokkingModal;
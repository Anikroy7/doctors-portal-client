import React from 'react';
import { toast } from 'react-toastify';

const DeletedConfirmModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {

    const { name, email } = deleteDoctor;

    const handelDelete = () => {


        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {

                authorization: `bearer ${localStorage.getItem('access-token')}`
            }

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount > 0) {
                    toast.success(`Doctor: ${name}  deleted successfully`)
                    refetch()
                    setDeleteDoctor(null)
                }
            })


    }
    return (
        <div>
            <input type="checkbox" id="deleteConfirmModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">
                        Are you sure you want to delete <span className='text-red-700'>{name} ?</span>
                    </h3>
                    <p class="py-4">If you select to delete doctor it will be deleted permanently from database and and your website.</p>
                    <div class="modal-action">
                        <button onClick={() => handelDelete()} class="btn btn-outline btn-error btn-xs">Delete</button>
                        <label for="deleteConfirmModal" class="btn btn-secondary btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletedConfirmModal;
import React from 'react';


const DoctorDetails = ({ doctor, index, setDeleteDoctor }) => {
    const { name, speciality, img } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-10 mask mask-hexagon">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>

                <label onClick={() => setDeleteDoctor(doctor)} for="deleteConfirmModal" class="btn  btn-error btn-xs">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorDetails;
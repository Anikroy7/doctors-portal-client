import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDcotor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    const localStorageKey = '94b4675dabd4806edf0f4be743c63701'
    const onSubmit = async data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData()
        formData.append('image', image);
        fetch(`https://api.imgbb.com/1/upload?key=${localStorageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        img: img,
                        speciality: data.speciality
                    }
                    console.log(doctor);

                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success("Doctor added successfully")
                                reset()
                            }
                            else {
                                toast.error('Failed to add the doctor')
                            }
                        })
                }
            })

    };

    return (
        <div>
            <h3 className='text-3xl text-center text-accent'>Add Doctor</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type your name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}


                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Type your email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Please give valid email adress'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-700">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>}

                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Speciality</span>
                    </label>
                    <select {...register('speciality')} class="select w-full max-w-xs">
                        {
                            services.map(service => <option

                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }

                    </select>


                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input
                        type="file"

                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }

                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-700">{errors.name.message}</span>}


                    </label>
                </div>
                <input className='btn text-white w-full max-w-xs' type="submit" value='add' />
            </form>
        </div>
    );
};

export default AddDcotor;
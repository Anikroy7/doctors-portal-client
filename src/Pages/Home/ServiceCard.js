import React from 'react';

const ServiceCard = ({ img, name, description }) => {
    return (
        <div className="card w-100 bg-base-100 shadow-xl mt-24">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default ServiceCard;
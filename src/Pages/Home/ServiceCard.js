import React from 'react';

const ServiceCard = ({ img, name, description }) => {
    return (
        <div class="card w-100 bg-base-100 shadow-xl mt-24">
            <figure class="">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-semibold">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default ServiceCard;
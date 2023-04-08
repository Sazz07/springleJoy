import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ category }) => {
    const { _id, img } = category;
    return (
        <div className="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0" key={_id}>
            <Link to={`/category/${_id}`} className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg border-b-8 border-secondary">
                <img src={img}className="absolute z-0 object-cover w-full h-72 md:h-96 transform duration-500 group-hover:scale-150" alt='' />
                <div className="absolute gradient transition duration-500 group-hover:bg-primary group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
                <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-500 h-full group-hover:translate-y-0 delay-100">
                    <div className="h-1/2 relative">
                        <div className="absolute bottom-0">
                            <h2 className="font-bold text-white leading-tight transition duration-500 text-xl pb-6 group-hover:underline">{category.categoryName}</h2>
                        </div>
                    </div>
                    <div className="h-1/2">
                        <p className="text-white pb-4 opacity-0 transition duration-500 group-hover:opacity-100"> Salvador plans to build a Bitcoin city at the base of a volcano, with the cryptocurrency used to fund the project.</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoriesCard;
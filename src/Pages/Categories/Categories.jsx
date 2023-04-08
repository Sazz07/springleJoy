import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://havenly-server1.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })
    console.log(categories)
    return (
        <div className=" min-h-screen mt-24">
            <p className='text-xl text-secondary font-bold text-center mb-4'>Options</p>
            <h1 className='text-4xl font-bold text-center px-8 lg:px-0 mode:text-white'>Choose Your Desire Gift Category!</h1>
            <div className="max-w-screen-xl mx-auto px-4 pt-16">
                <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">

                    {
                        categories?.map(category => <CategoriesCard
                            key={category._id}
                            category={category}
                        ></CategoriesCard>)
                    }



                </div>
            </div>
            <div className="md:mt-12 mt-20 px-8 lg:px-0 flex justify-center">
                <Link to='/apartments'><button className="text-base font-bold leading-4 text-white bg-secondary sm:w-auto w-full rounded px-4 py-6 focus:outline-none hover:bg-primary hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-white">See All Appertments</button></Link>
            </div>
        </div>
    );
};

export default Categories;
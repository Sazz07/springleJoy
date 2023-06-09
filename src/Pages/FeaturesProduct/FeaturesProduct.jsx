import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import FeatureCard from './FeatureCard';

const FeaturesProduct = () => {
    const { data: properties = [], refetch, isLoading } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/premium/properties`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h2 className='text-center text-4xl font-bold leading-normal mt-4 mb-10 place-content-center'>Features Apertments</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-11/12 mb-24 mx-auto ">
                {/* card section start here  * */}
                {isLoading && <Loading></Loading>}

                {
                    properties.map(property => <FeatureCard
                        key={property._id}
                        property={property}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeaturesProduct;
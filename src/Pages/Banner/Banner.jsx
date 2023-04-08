import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './Banner.css'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section
                        className="relative bg-[url(https://i.postimg.cc/QdZmy19k/gift-1420830-960-720.jpg)] bg-cover bg-center bg-no-repeat"
                    >
                        <div
                            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
                        ></div>

                        <div
                            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                        >
                            <div className="max-w-xl text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Let us find your

                                    <strong className="block font-extrabold text-rose-700">
                                        Desire Phone.
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                    We guarantee the best price for your old phone. Recycle your phone now for cash. Fast & easy trade-in for used phones in any condition. You can also buy good condition used phones.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <Link

                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        Get Started
                                    </Link>

                                    <Link

                                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        className="relative bg-[url(https://i.postimg.cc/HxSf9VV1/getty-168325476-349217.jpg)] bg-cover bg-center bg-no-repeat"
                    >
                        <div
                            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
                        ></div>

                        <div
                            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                        >
                            <div className="max-w-xl text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Let us find your

                                    <strong className="block font-extrabold text-rose-700">
                                        Desire Phone.
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                    We guarantee the best price for your old phone. Recycle your phone now for cash. Fast & easy trade-in for used phones in any condition. You can also buy good condition used phones.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <Link

                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        Get Started
                                    </Link>

                                    <Link

                                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section
                        className="relative bg-[url(https://i.postimg.cc/44HYHtKG/5ff8895f7f735.jpg)] bg-cover bg-center bg-no-repeat"
                    >
                        <div
                            className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/75 sm:to-white/25"
                        ></div>

                        <div
                            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                        >
                            <div className="max-w-xl text-center sm:text-left">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Let us find your

                                    <strong className="block font-extrabold text-rose-700">
                                        Desire Phone.
                                    </strong>
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
                                    We guarantee the best price for your old phone. Recycle your phone now for cash. Fast & easy trade-in for used phones in any condition. You can also buy good condition used phones.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-4 text-center">
                                    <Link

                                        className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                    >
                                        Get Started
                                    </Link>

                                    <Link

                                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
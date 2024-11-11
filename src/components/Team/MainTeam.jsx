import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"


const mainData = [
    {
        name: "Mr. Shumail Khan",
        title: "Director TAAKRA-2024",
        img: img1
    },
    {
        name: "Mr. Syed Asim Ali Bukhari",
        title: "Deputy Manager DSA",
        img: img2
    },
    {
        name: "Mr. Abdul Hannan",
        title: "Communications Executive DSA",
        img: img3
    },
    {
        name: "Mr. Faryal Yusuf",
        title: "Communications Executive DSA",
        img: img4
    }
];

const MainTeam = () => {
    return (
        <div className="bg-transparent mt-16">
            <section id="features" className="relative block  py-2 md:py-2 ">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal" data-aos="slide-right">
                        TAAKRA 2024 EXECUTIVE COUNCIL TEAM
                    </h2>
                </div>

                <div className="relative mx-auto max-w-5xl z-10 pt-8 " data-aos="fade-up">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={true}
                        loop={true}
                        speed={400}
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={20}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: true,
                        }}
                        breakpoints={{
                            240: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1050: { slidesPerView: 3 },
                            2000: { slidesPerView: 4 },
                        }}
                    >
                        {mainData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-20 max-w-sm h-96 mx-auto mt-8">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                    <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                                        {item.name}
                                    </h3>
                                    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                        {item.title}
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default MainTeam;

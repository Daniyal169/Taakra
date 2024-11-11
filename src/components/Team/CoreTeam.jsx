import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from 'swiper/modules';

import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";
import img11 from "../../assets/img11.jpg";
import img12 from "../../assets/img12.jpg";
import img13 from "../../assets/img13.jpg";
import img14 from "../../assets/img14.jpg";
import img15 from "../../assets/img15.jpg";
import img16 from "../../assets/img16.jpg";
import img17 from "../../assets/img17.jpg";
import img18 from "../../assets/img18.jpg";
import img19 from "../../assets/img19.jpg";
import img20 from "../../assets/img20.jpg";
import img21 from "../../assets/img21.jpg";
import img22 from "../../assets/img22.jpg";
import img23 from "../../assets/img23.jpg";
import img24 from "../../assets/img24.jpg";
import img25 from "../../assets/img25.jpg";
import img26 from "../../assets/img26.jpg";
import img27 from "../../assets/img27.jpg";
import img28 from "../../assets/img28.jpg";



const coreOne = [
    {
        name: "Muhammad Talha Khan",
        title: "Director Registrations",
        img: img5
    },
    {
        name: "Muhammad Waqas",
        title: "Deputy Director Registrations",
        img: img6
    },
    {
        name: "Ashar Afzal",
        title: "Director Campus Ambassador",
        img: img7
    },
    {
        name: "Gulshan Idrees",
        title: "Deputy Director Campus Ambassador",
        img: img8
    },
    {
        name: "Muhammad Usama Awan",
        title: "Director Media",
        img: img9
    },
    {
        name: "Muneeb Ghias",
        title: "Deputy Director Media",
        img: img10
    },
    {
        name: "Abdul Hanan Baig",
        title: "Director Social Media",
        img: img11
    },
    {
        name: "Hasaan Rauf",
        title: "Deputy Director Social Media",
        img: img12
    }
];
const coreTwo = [
    {
        name: "Maha Khan",
        title: "Director Management",
        img: img13
    },
    {
        name: "Muhammad Muwahid Malik",
        title: "Deputy Director Management",
        img: img14
    },
    {
        name: "Abubakar Toor",
        title: "Director Security",
        img: img15
    },
    {
        name: "Syed Dabeer Ali",
        title: "Deputy Director Security",
        img: img16
    },
    {
        name: "Abbas Irfan",
        title: "Director Sponsorship",
        img: img17
    },
    {
        name: "Salika Sheikh",
        title: "Deputy Director Sponsorship",
        img: img18
    },
    {
        name: "Wahaj Mazhar Rana",
        title: "Director Graphics",
        img: img19
    },
    {
        name: "Affan Tariq",
        title: "Deputy Director Graphics",
        img: img20
    }
];

const coreThree = [
    {
        name: "Kainat Ahmad",
        title: "Director Marketing",
        img: img21
    },
    {
        name: "Hussain Ishtiaq",
        title: "Deputy Director Marketing",
        img: img22
    },
    {
        name: "Khizer Nadeem",
        title: "Director Creative",
        img: img23
    },
    {
        name: "Zommer Shahid",
        title: "Director Creative Team",
        img: img24
    },
    {
        name: "Ayesha Alvi",
        title: "Director Publications",
        img: img25
    },
    {
        name: "Malaika Javed",
        title: "Deputy Director Publications",
        img: img26
    },
    {
        name: "Mian Ali Amir",
        title: "Director Hospitality",
        img: img27
    },
    {
        name: "Ahmad Butt",
        title: "Deputy Director Hospitality",
        img: img28
    }
];



const CoreTeam = () => {
    return (
        <div className="bg-transparent mt-16" id="team">
            <section id="features" className="relative block  py-2 md:py-2 ">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal" data-aos="slide-right">
                        TAAKRA 2024 CORE TEAM
                    </h2>
                </div>

                {/* First Row */}
                <div className="relative mx-auto max-w-5xl z-10 pt-8" data-aos="fade-up">
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
                            reverseDirection: true,
                        }}
                        rtl={true}
                        breakpoints={{
                            240: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1050: { slidesPerView: 3 },
                            2000: { slidesPerView: 4 },
                        }}
                    >
                        {coreOne.map((item, index) => (
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

                {/* Second Row */}
                <div className="relative mx-auto max-w-5xl z-10 pt-8" data-aos="fade-up">
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
                        {coreTwo.map((item, index) => (
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

                {/* Third row */}
                <div className="relative mx-auto max-w-5xl z-10 pt-8" data-aos="fade-up">
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
                            reverseDirection: true,
                        }}
                        rtl={true}
                        breakpoints={{
                            240: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1050: { slidesPerView: 3 },
                            2000: { slidesPerView: 4 },
                        }}
                    >
                        {coreThree.map((item, index) => (
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

export default CoreTeam;

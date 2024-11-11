import React from 'react'
import abt from "../../assets/abt.jpeg"

function About() {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0" >
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto" id='about'>
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center" data-aos="slide-right">
                                        About UCP TAAKRA
                                    </h2>
                                    <p className="text-white text-base font-light leading-relaxed lg:text-start text-center">
                                        University of Central Punjab, a nationally recognized university, is known not only for its phenomenal academic excellence but also for its commendable co-curricular as well as extra- curricular activities. After arranging successful 5th Edition of TAAKRA’23, where 200+ leading institutions of country actively participated. Now UCP is back with TAAKRA 2024; a multi-category five-day event from 28th February to 3rd March, 2024. UCP TAAKRA 2024 will offer 56 different competitions in 18 different categories.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full flex-col justify-center items-start gap-6 flex">
                                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">200+ Institutes</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Partnering with 200+ institutes for educational growth.
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">56+ Competitions</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Organizing 56+ competitions to encourage excellence.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div className="w-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">18+ Categories</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Offering 18+ categories for diverse learning.
                                        </p>
                                    </div>
                                    <div className="w-full h-full p-3.5 rounded-xl border border-gray-500 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex" data-aos="fade-up">
                                        <h4 className="text-gray-100 text-2xl font-bold font-manrope leading-9">200k+ Cash Prize</h4>
                                        <p className="text-gray-200 text-base font-normal leading-relaxed">
                                            Over 200k in cash prizes to reward excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-[#010310] rounded-3xl sm:border border-gray-500 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src={abt} alt="about Us image" data-aos="zoom-in" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;

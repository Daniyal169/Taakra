import React from 'react'
import sub1 from "../../assets/sub1.jpeg"
import sub2 from "../../assets/sub2.jpeg"

function OurTheme() {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img
                                className="rounded-xl object-cover"
                                src={sub1}
                                alt="about Us image"
                                data-aos="fade-up"
                            />
                        </div>
                        <img
                            className="sm:ml-0 ml-auto rounded-xl object-cover"
                            src={sub2}
                            alt="about Us image"
                            data-aos="fade-up"
                        />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex" data-aos="fade-in">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    Note By Director TAAKRA 2025
                                </h2>
                                <p className="text-gray-200 text-base font-normal leading-relaxed lg:text-start text-center">
                                    I am honored to welcome you all to TAAKRA 2025, a key event at UCP that holds great significance for our students and administration. We are excited to host you once again, showcasing your talents and offering great cash prizes. This 5-day event promises to be rewarding, filled with healthy competitions, friendly matches, social nights, and lots of fun. We look forward to your active participation and wish you all the best!
                                </p>

                            </div>
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    Theme for TAAKRA 2025
                                </h2>
                                <p className="text-gray-200 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Every year TAAKRA comes forward with a unique theme. This year the theme of TAAKRA 2025 is
                                    “SKY”, which captures the essence of freedom, limitlessness and transcendence. “Beyond The Limits”
                                    which is the official hashtag of this event, represents liberty, infinity and the urge to
                                    fight on event being fearless and boundless.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTheme
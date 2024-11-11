import React from 'react'
import { Link } from 'react-router-dom'
import vid from "../../assets/video.mp4"

function Hero() {
    return (
        <>
            <div className="relative min-h-[90vh] sm:h-[50vh] md:h-[90vh]" data-aos="fade-in">
                <video autoPlay muted loop className="w-full h-full opacity-20 absolute top-0 left-0 object-cover">
                    <source src={vid} type="video/mp4" />
                </video>

                <div className="hero absolute w-full h-full flex items-center justify-center">
                    <div className="w-full">

                        <div className="p-8 md:p-16 sm:p-12">
                            <div className="text-5xl sm:text-6xl md:text-7xl w-full max-w-2xl gap-4 bg-transparent text-clip">
                                <h1 className="heroHeading text-white font-bold mb-6">
                                    UCP TAAKRA
                                </h1>

                                <p className="text-gray-400 text-xl md:text-2xl lg:text-3xl xl:text-4xl heroText w-full">
                                    UCP TAAKRA 2025 : Multi category 5 days event ,is now open for all the diverse talent out there to participate
                                </p>

                            </div>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/about"
                                    className="btn text-white bg-[#d00000] px-6 py-2 rounded-lg hover:bg-[#9d0208] transition duration-300"
                                >
                                    Learn More<span aria-hidden="true" className='ml-2'> →</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero
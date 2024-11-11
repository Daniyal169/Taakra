import React from 'react'

function Location() {
    return (
        <section >
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-10 lg:px-8 mt-12" id='venue'>
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-center text-center" data-aos="fade-up">
                        VENUE
                    </h2>
                    <p className="mt-4 text-lg text-gray-300" data-aos="fade-up">Join us at TAAKRA 2025 at the University of Central Punjab (UCP) for an unforgettable experience. With vibrant atmosphere and top-notch facilities, our campus is the perfect venue for competitions and social nights</p>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" >
                        <div className="rounded-lg overflow-hidden" data-aos="fade-in">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                                width="100%" height="480" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden" data-aos="slide-left">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-white"> Address</h3>
                                    <p className="mt-1 text-gray-300">1 - Khayaban-e-Jinnah Road
                                        Johar Town
                                        Lahore</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Days</h3>
                                    <p className="mt-1 text-gray-300">1 March 9am - 10pm</p>
                                    <p className="mt-1 text-gray-300">2 March 9am - 10pm</p>
                                    <p className="mt-1 text-gray-300">3 March 9am - 10pm</p>
                                    <p className="mt-1 text-gray-300">4 March 9am - 10pm</p>
                                    <p className="mt-1 text-gray-300">5 March 9am - 10pm</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Contact</h3>
                                    <p className="mt-1 text-gray-300">Email: itaakra@ucp.edu.pk</p>
                                    <p className="mt-1 text-gray-300">Phone: 0321 622 2897</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
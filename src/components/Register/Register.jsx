import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>

            <section className="bg-[#06091c] py-10 px-8" id='register'>
                <div className="max-w-7xl mx-auto text-center" >
                    <h2 className="text-3xl font-extrabold text-gray-100" data-aos="fade-up">Join Us at TAAKRA 2025</h2>
                    <p className="mt-4 text-lg text-gray-400" data-aos="fade-up">
                        Join us at <strong>TAAKRA 2025</strong> at the University of Central Punjab (UCP) for an unforgettable experience. With vibrant atmosphere and top-notch facilities, our campus is the perfect venue for competitions and social nights.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-x-6" data-aos="fade-up">
                        <Link
                            to="/about"
                            className="btn text-white bg-[#d00000] px-6 py-2 rounded-lg hover:bg-[#9d0208] transition duration-300"
                        >
                            Register <span aria-hidden="true" className="ml-2"> →</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;

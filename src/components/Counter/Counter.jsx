import React, { useEffect, useState } from 'react';

function Counter() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const targetDate = new Date('March 1, 2025 00:00:00').getTime(); // Target date (March 1st, 2025)

        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval); // Stop the countdown if the target date is reached
            } else {
                // Calculate days, hours, minutes, and seconds remaining
                const remainingDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const remainingHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const remainingMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const remainingSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                setDays(remainingDays);
                setHours(remainingHours);
                setMinutes(remainingMinutes);
                setSeconds(remainingSeconds);
            }
        }, 1000); // Update the countdown every second

        return () => clearInterval(countdownInterval); // Clean up interval on component unmount
    }, []);

    return (
        <div className=" bg-[#06091c]">
            <div className="py-10 bg-[#06091c] sm:py-10 ">
                <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-white sm:text-4xl sm:leading-10" data-aos="fade-up">
                            Countdown to March 1st, 2025
                        </h2>
                        <p className="mt-3 text-xl leading-7 text-gray-600 dark:text-gray-400 sm:mt-4" data-aos="fade-up">
                            The countdown to the big day is on!
                        </p>
                    </div>
                </div>
                <div className="mt-10 bg-[#06091c]" data-aos="fade-up">
                    <div className="relative" >
                        <div className="absolute inset-0 h-1/2 bg-[#06091c]"></div>
                        <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                            <div className="max-w-4xl mx-auto">
                                <dl className="bg-white dark:bg-gray-900 rounded-lg shadow-lg sm:grid sm:grid-cols-4">
                                    <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-100" id="item-1">
                                            Days
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100" aria-describedby="item-1">
                                            {days}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            Hours
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                                            {hours}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            Minutes
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                                            {minutes}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                                        <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            Seconds
                                        </dt>
                                        <dd className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100">
                                            {seconds}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-scroll';
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import invite from "../../assets/invite.pdf";

// Navigation Links
const navigation = [
    { name: 'About', href: 'about', current: true },
    { name: 'Team', href: 'team', current: false },
    { name: 'Guidelines', href: invite, current: false, download: true },
    { name: 'Venue', href: 'venue', current: false },
    { name: 'Register', href: 'register', current: false },
];

export default function Navbar() {
    return (
        <Disclosure as="nav" className="custom-navbar py-2">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-40">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Logo on the left */}
                    <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link to="/" className="navLink">
                            <img src={Logo} alt="Logo" className="logo" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                        </Disclosure.Button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="hidden sm:block">
                            <div className="flex space-x-10">
                                {navigation.map((item) => (
                                    item.download ? (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            download // Trigger download
                                            className="navLink transition duration-300"
                                        >
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            smooth={true}
                                            duration={500}
                                            className={`navLink transition duration-300 ${item.current ? 'text-blue-600' : ''}`} // Highlight active link
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (visible when open) */}
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        item.download ? (
                            <a
                                key={item.name}
                                href={item.href}
                                download
                                className="navLink block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Disclosure.Button
                                key={item.name}
                                as={Link}
                                to={item.href}
                                smooth={true}
                                duration={500}
                                className="navLink block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {item.name}
                            </Disclosure.Button>
                        )
                    ))}
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
}

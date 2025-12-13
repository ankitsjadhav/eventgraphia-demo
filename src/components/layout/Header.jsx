import { useState } from 'react'
import { Camera, Menu, X, ChevronDown } from 'lucide-react'
import NavLink from '../common/NavigationLink.jsx'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className='sticky top-0 z-50 w-full border-b border-gray-100 bg-white/30 backdrop-blur-md transition-all'>
            <div className='mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                {/* Left: Logo */}
                <div className='flex items-center gap-2 group cursor-pointer'>
                    {/* Modern minimalist logo mark */}
                    <div className='flex h-9 w-9 items-center justify-center bg-black text-white transform transition-transform duration-300 group-hover:rotate-12'>
                        <span className='font-bold text-xs tracking-tighter'>
                            EG
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl font-bold tracking-widest text-gray-900 leading-none'>
                            EVENT
                        </span>
                        <span className='text-[10px] font-medium tracking-[0.3em] text-gray-500 uppercase'>
                            GRAPHIA
                        </span>
                    </div>
                </div>

                {/* Right: Navigation & Actions */}
                <div className='flex items-center gap-8'>
                    {/* Desktop Navigation */}
                    <nav className='hidden items-center gap-8 md:flex'>
                        <NavLink href='#portfolio'>PORTFOLIO</NavLink>
                        <NavLink href='#videos'>VIDEOS</NavLink>
                        <NavLink href='#faq'>FAQ</NavLink>

                        {/* Contact Dropdown Trigger */}
                        <div className='group relative flex items-center gap-1 cursor-pointer py-2'>
                            <span className='text-sm font-bold tracking-wide text-gray-600 transition-colors group-hover:text-black'>
                                CONTACT
                            </span>
                            <ChevronDown
                                size={14}
                                className='text-gray-400 transition-transform group-hover:rotate-180 group-hover:text-black'
                            />

                            {/* Dropdown Content */}
                            <div className='absolute right-0 top-full mt-4 w-48 origin-top-right scale-95 opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100 bg-white border border-gray-100 shadow-xl p-1'>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black font-medium'
                                >
                                    Email Us
                                </a>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-black font-medium'
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        <NavLink href='#login'>LOGIN</NavLink>
                    </nav>

                    {/* CTA Button */}
                    <div className='hidden md:block'>
                        <button className='group relative overflow-hidden bg-black px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-gray-800 hover:scale-105 hover:shadow-xl cursor-pointer'>
                            <span className='relative z-10 flex items-center gap-2 tracking-wide uppercase'>
                                Get a callback
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='flex p-2 text-gray-900 md:hidden'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className='border-t border-gray-100 bg-white md:hidden absolute w-full left-0 shadow-xl'>
                    <nav className='flex flex-col space-y-6 p-8'>
                        <a
                            href='#portfolio'
                            className='text-lg font-bold text-gray-900 tracking-wide'
                        >
                            PORTFOLIO
                        </a>
                        <a
                            href='#videos'
                            className='text-lg font-bold text-gray-900 tracking-wide'
                        >
                            VIDEOS
                        </a>
                        <a
                            href='#faq'
                            className='text-lg font-bold text-gray-900 tracking-wide'
                        >
                            FAQ
                        </a>
                        <a
                            href='#contact'
                            className='text-lg font-bold text-gray-900 tracking-wide'
                        >
                            CONTACT
                        </a>
                        <a
                            href='#login'
                            className='text-lg font-medium text-gray-500'
                        >
                            LOGIN
                        </a>
                        <button className='w-full bg-black py-4 text-center text-sm font-bold text-white uppercase tracking-widest shadow-md'>
                            Get a callback
                        </button>
                    </nav>
                </div>
            )}
        </header>
    )
}
export default Header

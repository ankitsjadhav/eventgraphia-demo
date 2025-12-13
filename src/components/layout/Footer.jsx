import { Camera, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-12 border-t border-gray-800'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    {/* Brand */}
                    <div className='flex flex-col items-center md:items-start'>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='flex h-8 w-8 items-center justify-center bg-white text-black'>
                                <span className='font-bold text-xs tracking-tighter'>
                                    EG
                                </span>
                            </div>
                            <span className='text-xl font-bold tracking-widest'>
                                EVENT GRAPHIA
                            </span>
                        </div>
                        <p className='text-gray-400 text-sm'>
                            Capturing the world, one frame at a time.
                        </p>
                    </div>

                    {/* Links */}
                    <div className='flex gap-8 text-sm font-medium text-gray-400'>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            Portfolio
                        </a>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            Services
                        </a>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            About
                        </a>
                        <a
                            href='#'
                            className='hover:text-white transition-colors'
                        >
                            Contact
                        </a>
                    </div>

                    {/* Socials */}
                    <div className='flex gap-4'>
                        <a
                            href='#'
                            className='p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors text-white'
                        >
                            <Instagram size={18} />
                        </a>
                        <a
                            href='#'
                            className='p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors text-white'
                        >
                            <Twitter size={18} />
                        </a>
                        <a
                            href='#'
                            className='p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors text-white'
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>

                <div className='mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-600'>
                    &copy; 2024 Event Graphia. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
export default Footer

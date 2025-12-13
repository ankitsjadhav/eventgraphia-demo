import { ArrowRight } from 'lucide-react'

const Hero = () => {
    return (
        <section className='relative overflow-hidden bg-white pt-16 pb-32 sm:pt-24 sm:pb-40 lg:pb-48'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
                    {/* Left Column: Text Content */}
                    <div className='sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left flex flex-col justify-center'>
                        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
                            Visual Storytelling <br />
                            <span className='block text-gray-400'>
                                for the Modern Era.
                            </span>
                        </h1>
                        <p className='mt-6 text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl leading-relaxed'>
                            We don't just take photos; we capture the
                            atmosphere, the emotion, and the unseen moments that
                            define your event.
                        </p>
                        <div className='mt-8 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center lg:mx-0 lg:justify-start'>
                            <button className='flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-widest text-black transition-all hover:border-gray-400 hover:text-gray-600'>
                                View Full Portfolio <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image Grid */}
                    <div className='relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center'>
                        <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
                            <div className='relative block w-full overflow-hidden rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                <img
                                    className='w-full object-cover'
                                    src='https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80&w=800'
                                    alt='Event Atmosphere'
                                />
                                {/* Floating Overlay Card */}
                                <div className='absolute bottom-4 left-4 right-4 rounded-md bg-white/90 p-4 backdrop-blur-sm shadow-sm'>
                                    <p className='text-xs font-bold uppercase tracking-wider text-gray-500'>
                                        Featured
                                    </p>
                                    <p className='text-sm font-semibold text-gray-900'>
                                        The Grand Tech Summit 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero

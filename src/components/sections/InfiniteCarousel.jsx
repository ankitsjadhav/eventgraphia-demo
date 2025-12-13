import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { EVENT_IMAGES } from '../../constants/data'

const Carousel = () => {
    const scrollContainerRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        const container = scrollContainerRef.current
        if (!container) return

        const { scrollLeft, scrollWidth, clientWidth } = container

        // Allow a small buffer (1px) for calculation precision
        setCanScrollLeft(scrollLeft > 1)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }

    useEffect(() => {
        const container = scrollContainerRef.current
        if (container) {
            // Check initial state
            checkScrollButtons()

            // Add listener
            container.addEventListener('scroll', checkScrollButtons)
            window.addEventListener('resize', checkScrollButtons)
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScrollButtons)
            }
            window.removeEventListener('resize', checkScrollButtons)
        }
    }, [])

    /**
     * Calculates the exact width of a card + the grid gap
     * to ensure perfect snapping on button click.
     */
    const scroll = (direction) => {
        const container = scrollContainerRef.current
        if (!container) return

        // Get the first card to measure its width dynamically
        const card = container.querySelector('[data-carousel-card]')
        if (!card) return

        // Get the computed style of the container to find the gap
        const style = window.getComputedStyle(container)
        const gap = parseInt(style.columnGap || 0, 10)

        // FIX: Use offsetWidth to include borders and add 1px buffer
        // to ensure we strictly cross the snap threshold
        const scrollAmount = card.offsetWidth + gap + 1

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
    }

    return (
        <section className='relative w-full py-12 md:py-24 bg-gray-50'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                {/* Changed to flex-col and text-center to center the heading perfectly */}
                <div className='relative mb-12 flex flex-col items-center justify-center text-center'>
                    <div>
                        <h2 className='text-4xl font-serif font-medium text-gray-900 sm:text-5xl tracking-tight'>
                            Weddings
                        </h2>
                        <p className='mt-2 text-lg text-gray-500'>
                            Capturing moments that matter.
                        </p>
                    </div>

                    {/* Navigation Buttons */}
                    {/* Positioned absolutely to the right so they don't offset the centered text */}
                    <div className='absolute right-0 bottom-0 hidden gap-3 sm:flex'>
                        <button
                            onClick={() => scroll('left')}
                            disabled={!canScrollLeft}
                            className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-all 
                                ${
                                    !canScrollLeft
                                        ? 'opacity-50 cursor-not-allowed border-gray-100 text-gray-300'
                                        : 'hover:border-gray-900 hover:bg-gray-900 hover:text-white shadow-sm cursor-pointer'
                                }`}
                            aria-label='Scroll left'
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={!canScrollRight}
                            className={`flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition-all 
                                ${
                                    !canScrollRight
                                        ? 'opacity-50 cursor-not-allowed border-gray-100 text-gray-300'
                                        : 'hover:border-gray-900 hover:bg-gray-900 hover:text-white shadow-sm cursor-pointer'
                                }`}
                            aria-label='Scroll right'
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Carousel Container */}
                <div
                    ref={scrollContainerRef}
                    className='scrollbar-hide -mx-4 flex gap-6 overflow-x-auto px-4 pb-8 pt-4 sm:mx-0 sm:pl-0 sm:pr-5 lg:gap-8 snap-x snap-mandatory'
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {EVENT_IMAGES.map((item) => (
                        <div
                            key={item.id}
                            data-carousel-card
                            className='relative aspect-[4/5] min-w-[280px] flex-none snap-center overflow-hidden rounded-2xl bg-gray-200 sm:w-[400px]'
                        >
                            <div className='group h-full w-full overflow-hidden'>
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className='h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:scale-110'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inline Styles for Scrollbar Hiding */}
            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    )
}
export default Carousel

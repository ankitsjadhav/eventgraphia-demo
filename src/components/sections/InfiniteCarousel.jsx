import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { EVENT_IMAGES } from "../../constants/data";

const Carousel = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollButtons();
    container.addEventListener("scroll", checkScrollButtons);
    window.addEventListener("resize", checkScrollButtons);

    return () => {
      container.removeEventListener("scroll", checkScrollButtons);
      window.removeEventListener("resize", checkScrollButtons);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const card = container.querySelector("[data-carousel-card]");
    if (!card) return;

    const style = window.getComputedStyle(container);
    const gap = parseInt(style.columnGap || 0, 10);
    const scrollAmount = card.offsetWidth + gap + 1;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full py-12 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12 flex flex-col items-center text-center">
          <h2 className="text-4xl font-serif font-medium text-gray-900 sm:text-5xl">
            Weddings
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Capturing moments that matter.
          </p>

          <div className="absolute right-0 bottom-0 hidden sm:flex gap-3">
            <DesktopButton
              disabled={!canScrollLeft}
              onClick={() => scroll("left")}
            >
              <ArrowLeft size={20} />
            </DesktopButton>
            <DesktopButton
              disabled={!canScrollRight}
              onClick={() => scroll("right")}
            >
              <ArrowRight size={20} />
            </DesktopButton>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="
            scrollbar-hide
            -mx-4
            flex
            gap-6
            overflow-x-auto
            overflow-y-visible
            px-4 pb-8 pt-4
            sm:mx-0 sm:px-0
            lg:gap-8
            snap-x snap-mandatory
          "
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x pan-y",
          }}
        >
          {EVENT_IMAGES.map((item) => (
            <div
              key={item.id}
              data-carousel-card
              className="
                relative
                flex-none
                snap-center
                overflow-hidden
                rounded-2xl
                bg-gray-200
                aspect-[4/5]
                w-[75vw]
                max-w-[280px]
                sm:w-[400px]
                sm:max-w-none
              "
            >
              <img
                src={item.url}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-4 sm:hidden">
          <MobileButton
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
          >
            <ArrowLeft size={18} />
          </MobileButton>
          <MobileButton
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          >
            <ArrowRight size={18} />
          </MobileButton>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { scrollbar-width: none; }
      `}</style>
    </section>
  );
};

const DesktopButton = ({ disabled, onClick, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`h-12 w-12 flex items-center justify-center rounded-full border bg-white transition
      ${
        disabled
          ? "opacity-40 cursor-not-allowed"
          : "hover:bg-gray-900 hover:text-white"
      }`}
  >
    {children}
  </button>
);

const MobileButton = ({ disabled, onClick, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`h-10 w-10 flex items-center justify-center rounded-full border bg-white transition
      ${disabled ? "opacity-40 cursor-not-allowed" : "active:scale-95"}`}
  >
    {children}
  </button>
);

export default Carousel;

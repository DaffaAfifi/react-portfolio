/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiExpand } from "react-icons/bi";
import Slider from "react-slick";

const AnalysisVisualCarousel = ({ visuals }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVisual, setActiveVisual] = useState(null);

  useEffect(() => {
    if (!activeVisual) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveVisual(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeVisual]);

  if (!Array.isArray(visuals) || visuals.length === 0) {
    return null;
  }

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    afterChange: setCurrentSlide,
  };

  return (
    <>
      <div className="mt-10">
        <div className="relative overflow-hidden border border-slate-800 bg-slate-900/40">
          <Slider ref={sliderRef} {...sliderSettings}>
            {visuals.map((visual) => (
              <div key={visual.src}>
                <button
                  type="button"
                  onClick={() => setActiveVisual(visual)}
                  className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-400"
                  aria-label={`View larger: ${visual.title}`}
                >
                  <div className="relative aspect-[16/9] bg-slate-950">
                    <img
                      src={visual.src}
                      alt={visual.alt || visual.title}
                      className="h-full w-full object-contain"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 border border-slate-600/80 bg-slate-950/80 px-2 py-1 text-xs text-slate-300 opacity-0 transition-opacity group-hover:opacity-100">
                      <BiExpand aria-hidden="true" />
                      Enlarge
                    </span>
                  </div>
                  <div className="border-t border-slate-800 px-5 py-4 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                      {visual.type}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-white">
                      {visual.title}
                    </h3>
                    {visual.description && (
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {visual.description}
                      </p>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </Slider>
          <button
            type="button"
            aria-label="Previous analysis visual"
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={currentSlide === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-600 bg-slate-950/80 p-2 text-white transition-colors hover:border-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <BiChevronLeft aria-hidden="true" className="text-xl" />
          </button>
          <button
            type="button"
            aria-label="Next analysis visual"
            onClick={() => sliderRef.current?.slickNext()}
            disabled={currentSlide === visuals.length - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-600 bg-slate-950/80 p-2 text-white transition-colors hover:border-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <BiChevronRight aria-hidden="true" className="text-xl" />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2" aria-label="Analysis visual pagination">
            {visuals.map((visual, index) => (
              <button
                key={visual.src}
                type="button"
                aria-label={`Go to visual ${index + 1}: ${visual.title}`}
                aria-current={currentSlide === index ? "true" : undefined}
                onClick={() => sliderRef.current?.slickGoTo(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-sky-400"
                    : "w-1.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
          <span className="text-xs tabular-nums text-slate-500">
            {currentSlide + 1} / {visuals.length}
          </span>
        </div>
      </div>

      {activeVisual && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVisual.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 p-6"
          onClick={() => setActiveVisual(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVisual(null)}
            aria-label="Close enlarged visual"
            className="absolute right-5 top-5 z-10 border border-slate-600 px-3 py-2 text-sm text-slate-200 hover:border-sky-400 hover:text-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Close
          </button>
          <button
            type="button"
            className="max-h-full max-w-5xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            onClick={(event) => event.stopPropagation()}
            aria-label={`Close enlarged ${activeVisual.title}`}
          >
            <img
              src={activeVisual.src}
              alt={activeVisual.alt || activeVisual.title}
              className="max-h-[85vh] max-w-full object-contain"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default AnalysisVisualCarousel;

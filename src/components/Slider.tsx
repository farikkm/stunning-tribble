import { useEffect, useRef, useState } from "react";
// Core modules
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
// Additional modules
import { Navigation, Pagination, Scrollbar, Mousewheel } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./ui/Button";

interface Props {
  sections: (() => React.ReactNode)[];
}

const Slider = ({ sections }: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [showScrollbar, setShowScrollbar] = useState<boolean>(true);
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);

  // Листаем к странице после перезагрузки
  useEffect(() => {
    const savedIndex = localStorage.getItem("swiperIndex");
    if (swiperRef.current && savedIndex) {
      swiperRef.current.swiper.slideTo(Number(savedIndex), 0);
    }
  }, []);

  // ScrollBar
  useEffect(() => {
    if (window.innerHeight < 700 || window.innerWidth < 768) setShowScrollbar(false);
  }, [showScrollbar]);

  // Last Slide with Footer
  useEffect(() => {
    if (isLastSlide) {
      document.body.style.overflowY = "auto"; // Разрешаем скролл во время последнего слайда
    } else {
      document.body.style.overflowY = "hidden"; // Блокируем скролл для Swiper
    }
  }, [isLastSlide]);

  // Functions
  const scrollUp = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const scrollDown = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const scrollToTop = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideTo(0);
  }

  return (
    <>
      <Swiper
        ref={swiperRef}
        simulateTouch={true}
        direction="vertical"
        modules={[Navigation, Pagination, Scrollbar, Mousewheel]}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: false,
          thresholdDelta: 50,
          thresholdTime: 500,
        }}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={showScrollbar ? { draggable: false, dragSize: 100 } : false}
        pagination={showScrollbar ? false : true}
        className="h-screen"
        speed={500}
        onSlideChange={(swiper) => {
          localStorage.setItem("swiperIndex", String(swiper.activeIndex));
          setIsLastSlide(swiper.activeIndex === sections.length - 1);
        }}
      >
        {sections.map((section: any, index: number) => (
          <SwiperSlide key={index} className={`flex items-center justify-center ${index === sections.length - 1 ? "h-[150vh]! overflow-y-auto" : "h-screen"}`}>{section}</SwiperSlide>
        ))}
      </Swiper>

      {showScrollbar && (
        <div className="absolute right-0 top-0 flex flex-col justify-between items-center translate-y-[30%] h-[70vh] z-6">
          <button className="cursor-pointer !p-[7px]" onClick={scrollUp}>
            <img src="/icons/arrowUp.svg" alt="scrollbar-arrowUp" />
          </button>
          <button className="cursor-pointer !p-[7px]" onClick={scrollDown}>
            <img src="/icons/arrowDown.svg" alt="scrollbar-arrowDown" />
          </button>
        </div>
      )}

      <Button onClick={scrollToTop} className="hidden md:block fixed bottom-7 right-8 px-4! w-14 h-14 z-6" bg="blue">
        <img src="/icons/btnArrowUp.png" alt="btn-arrow-up" />
      </Button>
    </>
  );
};

export default Slider;

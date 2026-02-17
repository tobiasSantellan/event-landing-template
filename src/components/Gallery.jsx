import { COLORS } from "../config";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Gallery({ galleryConfig }) {
  const { images, autoplayDelay, caption } = galleryConfig;
  return (
    <section className="w-full flex flex-col items-center justify-center mt-4 mb-12 px-2 bg-white">
      <div className="relative w-full max-w-full flex flex-row gap-2 overflow-hidden min-h-[220px] lg:min-h-[420px]">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={8}
          loop={true}
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 3, spaceBetween: 12 },
          }}
          className="w-full h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={img + idx}>
              <img
                src={img}
                alt="Galería"
                className="w-full h-[620px] md:h-[720px] lg:h-[720px] object-cover select-none shadow-md"
                style={{ minHeight: 0, minWidth: 0, maxHeight: '720px' }}
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex flex-col items-center mt-20 mb-2 px-2">
        <hr className="w-2/3 lg:w-2/3 border-t mb-4" style={{ borderColor: COLORS.primary, opacity: 0.6 }} />
        <div className="flex justify-center w-full">
            <p className="text-center text-base sm:text-lg font-normal tracking-wide uppercase max-w-xl lg:max-w-3xl break-words" style={{ fontFamily: 'Montserrat, sans-serif', color: COLORS.primary, lineHeight: 1.3 }}>
            {caption}
          </p>
        </div>
        <hr className="w-2/3 lg:w-2/3 border-t mt-4" style={{ borderColor: COLORS.primary, opacity: 0.6 }} />
      </div>
    </section>
  );
}

export default Gallery;

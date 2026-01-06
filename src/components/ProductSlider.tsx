"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import ProductCard from "./ProductCard";
import type { Product } from "./ProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="product-slider"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .product-slider {
          padding: 40px 20px 60px;
        }

        .product-slider .swiper-button-next,
        .product-slider .swiper-button-prev {
          color: #3b82f6;
          background: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .product-slider .swiper-button-next:after,
        .product-slider .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }

        .product-slider .swiper-button-next:hover,
        .product-slider .swiper-button-prev:hover {
          background: #3b82f6;
          color: white;
          transform: scale(1.1);
        }

        .product-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #3b82f6;
          opacity: 0.5;
          transition: all 0.3s ease;
        }

        .product-slider .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 6px;
        }

        .product-slider .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }

        .product-slider .swiper-slide > * {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

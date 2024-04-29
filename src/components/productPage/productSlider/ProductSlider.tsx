import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import productImg1 from '../../../imgs/product/image1.jpg'
import productImg2 from '../../../imgs/product/image2.jpg'
import productImg3 from '../../../imgs/product/image3.jpg'
import productImg4 from '../../../imgs/product/image4.jpg'
import productImg5 from '../../../imgs/product/image5.jpg'
import { Swiper as SwiperType } from 'swiper';
import styles from "./ProductSlider.module.css";

const ProductSlider = () => {
   // const slide = document.querySelector('.swiper-slide.swiper-slide-thumb-active') as HTMLElement;
   // slide.style.cssText = 'border 1px solid #000';

   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

   const sliderImages = [
      {
         imageUrl: productImg1,
      },
      {
         imageUrl: productImg2,
      },
      {
         imageUrl: productImg3,
      },
      {
         imageUrl: productImg4,
      },
      {
         imageUrl: productImg5,
      },
   ]

   return (
      <div className={styles.productBlock__sliders}>
         <Swiper
            className={styles.subProductSlider}
            id="subProductSlider"
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={5}
            loop={true}
            freeMode={true}
            direction='vertical'
         >
            {sliderImages.map(sliderImage => <SwiperSlide><img src={sliderImage.imageUrl} alt="product sub image" /></SwiperSlide>)}
         </Swiper>
         <div>
            <Swiper
               className='mainProductSlider'
               modules={[Thumbs]}
               thumbs={{ swiper: thumbsSwiper }}
               spaceBetween={50}
               slidesPerView={1}
               loop={true}
            >
               {sliderImages.map(sliderImage => <SwiperSlide><img src={sliderImage.imageUrl} alt="product image" /></SwiperSlide>)}
            </Swiper>
            <button className={styles.productBlock__btn}>Додати до кошика</button>
         </div>
      </div>
   );
}

export default ProductSlider;
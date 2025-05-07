
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // <- New

const images = [
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675252219028.jpg',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675254124380.jpg',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675251452205.jpg',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675252219028.jpg',
  'https://www.hausavideos.visiontrek.in/_next/image?url=https%3A%2F%2Fvideos.visiontrek.in%2Fuploads%2Fimages%2Fpinesip%2Fimage_1664785617829.PNG&w=2048&q=75',
  'https://www.hausavideos.visiontrek.in/_next/image?url=https%3A%2F%2Fvideos.visiontrek.in%2Fuploads%2Fimages%2Fpinesip%2Fimage_1664873620294.PNG&w=2048&q=75',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675254124380.jpg',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675251452205.jpg',
  'https://www.shutterstock.com/shutterstock/photos/2485831851/display_1500/stock-photo-concept-comedian-show-open-mike-happy-young-african-american-man-comic-performing-standup-2485831851.jpg' , 
  'https://www.shutterstock.com/shutterstock/photos/2442419977/display_1500/stock-photo-waist-up-portrait-of-young-black-woman-speaking-to-microphone-performing-in-stand-up-show-copy-space-2442419977.jpg',
  'https://www.shutterstock.com/shutterstock/photos/2468066821/display_1500/stock-photo-hawthorne-ca-may-red-carpet-arrivals-for-a-night-of-laughter-comedy-show-held-at-the-2468066821.jpg',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675252219028.jpg',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675254124380.jpg',
  'https://visiontrekcontent.s3.ap-south-1.amazonaws.com/images/image_1675251452205.jpg',
];

const Carousel = () => {
  return (
    <div className="mt-10 px-4">
      <h2 className="text-3xl font-bold font-serif text-center text-gray-800 mb-4">
        Meet the Comedians Behind the Laughs
      </h2>
      <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
        Discover the brilliant minds and hilarious personalities who bring joy, wit, and non-stop laughter to your screens.
      </p>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={true} 
        modules={[Pagination, Navigation]} 
        className="w-full max-w-[1400px] h-[400px]"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
              <img src={img} alt={`Comedian ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

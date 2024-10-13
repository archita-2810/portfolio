"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import Wtmspeaker from "../../assets/wtm_ngp_speaker.jpg";
import Gdscspeaker from "../../assets/flutter_verse_speaker.jpg";
import Link from 'next/link';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const PublicSpeakingCarousel = () => {
  const events = [
    {
      imgSrc: Wtmspeaker,
      title: 'International Womens Day 2024 Host',
      info: 'WTM Nagpur, March 2024',
    },
    {
      imgSrc: Gdscspeaker,
      title: 'Flutter Verse Host',
      info: 'GDG RBU, January 2024',
    },
    // Add more events as needed
  ];

  return (
    <div className="w-full mx-auto mt-8 mb-8">
      <Link href="https://medium.com/@womentechmakersnagpur/a-journey-from-debate-to-public-speaking-0d40b3892771" target="_blank" rel="noopener noreferrer" className="text-3xl font-semibold">Have a look at some of my public speaking glimpses :p</Link>
      
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // navigation={showNavigation}
        className="mt-6"
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1, // 1 slide for screens 640px and below
        //   },
        //   768: {
        //     slidesPerView: 2, // 2 slides for screens larger than 768px
        //   }
        // }}
        // loop={true}
        // modules={[Autoplay, Pagination]}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-64 group">
              {/* Event Image */}
              <Image
                src={event.imgSrc}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
              {/* Event Info Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end pb-2 items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <p className="text-base">{event.info}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PublicSpeakingCarousel;

import './Banner.css';
import bannerImg from './../../../assets/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='md:-mt-20 back bg-no-repeat bg-cover bg-center h-screen flex flex-wrap items-center xl:px-20 md:px-12 lg:justify-around justify-center'>
      <div data-aos="fade-up" className='xl:mt-0 lg:mt-12 md:mt-16'>
        <h3 className="lg:text-6xl text-5xl font-bold font-mono leading-1 my-4 md:mx-0 mx-4">
          Turning Ideas into<br /> <span className='text-orange-400'>Impactful Events</span>
        </h3>
        <p className='max-w-[620px] md:mx-0 mx-4 my-4 text-justify text-sm'>
          At EventHorizonX, we are dedicated to creating remarkable corporate experiences that are meticulously tailored to your unique vision and objectives. With our unwavering commitment to innovation, creativity, and attention to detail, we work tirelessly to elevate your brand and leave an indelible mark in the corporate event landscape. Welcome to EventHorizonX, where your success is not just a goal; it's a promise.
        </p>
      </div>

      <div data-aos="fade-down"
         data-aos-easing="linear"
         data-aos-duration="1500" className='lg:max-w-lg md:max-w-lg sm:p-0 p-4'>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

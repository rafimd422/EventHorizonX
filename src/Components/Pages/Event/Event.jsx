import { Helmet, HelmetData } from 'react-helmet-async';
import './../About/about.css';
import OurFeatures from '../Home/OurFeatures';
import speaker4 from '../../../assets/speaker4.jpg'
import speaker2 from '../../../assets/speaker2.jpg'
import { FaBug, FaNewspaper, FaPhoneVolume, FaWpforms } from 'react-icons/fa6';

const Event = () => {
  const helmetData = new HelmetData({});
  return (
    <>
    <Helmet helmetData={helmetData}>
        <title>Events | EventHorizonX</title>
      </Helmet>
      
    <div className='h-fit'>
      <div className="bg h-[180px] w-full md:h-[400px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
       <p data-aos="zoom-in" className='xl:text-5xl md:text-4xl text-2xl font-bold border-b-2 border-red-600 p-3'>Our Upcoming Events</p>
      </div>

<div className='md:container md:mx-auto mx-4 my-12'>
  <p data-aos="zoom-out" className='md:text-4xl sm:text-3xl text-2xl text-center font-bold lg:mx-0 mx-4 my-6'>Join The World's Leading Companies
at Technology Conference</p>
<div data-aos="zoom-in-down" className="grid xl:grid-cols-4 grid-cols-2 w-full sm:gap-4 gap-2">
<div className='bg-gray-400 text-center md:mx-4 mx-2 p-4 rounded-md'>
  <p className='text-gray-600'>First Day</p>
  <p className='text-black xl:text-2xl md:text-xl text-lg font-bold'>JANUARY 5, 2024</p>
</div>
<div className='bg-orange-400 text-center md:mx-4 mx-2 p-4 rounded-md'>
  <p className='text-gray-600'>Second Day</p>
  <p className='text-black xl:text-2xl md:text-xl text-lg font-bold'>JANUARY 6, 2024</p>
</div>
<div className='bg-pink-600 text-center md:mx-4 mx-2 p-4 rounded-md'>
  <p className='text-gray-600'>Third Day</p>
  <p className='text-black xl:text-2xl md:text-xl text-lg font-bold'>JANUARY 7, 2024</p>
</div>
<div className='bg-gray-400 text-center md:mx-4 mx-2 p-4 rounded-md'>
  <p className='text-gray-600'>Fourth Day</p>
  <p className='text-black xl:text-2xl md:text-xl text-lg font-bold'>JANUARY 8, 2024</p>
</div>
</div>

</div>


<div class="grid lg:grid-cols-2 grid-cols-1 gap-2 antialiased text-gray-900 container mx-auto my-8">
<div data-aos="zoom-out-right">
    
    <img src={speaker4} alt="speakers imgee" class="md:max-w-lg mx-auto object-cover object-center rounded-lg shadow-md sm:p-2 p-8" />    
    
 <div class="relative px-4 -mt-16 max-w-4xl">
   <div class="bg-white p-6 rounded-lg shadow-lg mx-auto">
    <div class="flex items-baseline">
      <div class=" text-gray-600 uppercase text-xs font-semibold tracking-wider">
      1:00 am - 4:00 am
  </div>  
    </div>
    
    <h4 class="mt-1 text-gray-700 text-xl font-semibold uppercase truncate">Sarah Anderson</h4>
    <h4 class="mt-1 text-2xl font-bold uppercase leading-tight truncate">Registration For Opening Workshop</h4>
 
  <div class="mt-4">

    <span class="text-sm text-gray-600">We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</span>
  </div>  
  </div>
 </div>
</div>
<div data-aos="zoom-out-left">
    
    <img src={speaker2} alt="speakers imgee" class="md:max-w-lg mx-auto object-cover object-center rounded-lg shadow-md sm:p-2 p-8" />    
    
 <div class="relative px-4 -mt-16 max-w-4xl">
   <div class="bg-white p-6 rounded-lg shadow-lg mx-auto">
    <div class="flex items-baseline">
      <div class=" text-gray-600 uppercase text-xs font-semibold tracking-wider">
      1:00 am - 4:00 am
  </div>  
    </div>
    
    <h4 class="mt-1 text-gray-700 text-xl font-semibold uppercase truncate">David Lee</h4>
    <h4 class="mt-1 text-2xl font-bold uppercase leading-tight truncate">Modern Marketing Summit Sydney</h4>
 
  <div class="mt-4">

    <span class="text-sm text-gray-600">We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures</span>
  </div>  
  </div>
 </div>
</div>






</div>



      <div className="container mx-auto p-4 my-4 space-y-2 text-center">
		<p data-aos="fade-down"
     data-aos-anchor-placement="top-bottom" className="text-gray-400 text-3xl font-bold border-b-2 border-red-600 p-3 w-fit mx-auto">Our Features</p>
	</div>
      <OurFeatures />
    </div>
    <div className="my-6 mt-12">  <h3 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='lg:text-4xl sm:text-3xl text-2xl text-center font-bold mt-12 text-red-200 mb-4'>Contact Us for Tickets or Any Query</h3></div>
    <div className="flex flex-wrap justify-center sm:ms-0 ms-24">
              {/* Technical Support */}
              <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="mb-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex justify-center items-center">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaPhoneVolume />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Technical Support</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">support@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              {/* Sales Questions */}
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="mb-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaWpforms />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Sales Questions</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">sales@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              {/* Press */}
              <div data-aos="fade-up"
     data-aos-duration="3000" className="mb-12 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaNewspaper />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Press</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">press@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              {/* Bug Report */}
              <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mx-auto md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <FaBug />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="mb-2 font-bold dark:text-white">Bug Report</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Email: <a href="">bugs@example.com</a>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      Phone: +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default Event

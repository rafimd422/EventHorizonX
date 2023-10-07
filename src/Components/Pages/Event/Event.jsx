import { Helmet, HelmetData } from 'react-helmet-async';
import './../About/about.css';

const Event = () => {
  const helmetData = new HelmetData({});
  return (
    <>
    <Helmet helmetData={helmetData}>
        <title>Events | EventHorizonX</title>
      </Helmet>
      
    <div className='h-screen'>
      <div className="bg h-[180px] w-full md:h-[400px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
       <p className='xl:text-5xl md:text-4xl text-2xl font-bold border-b-2 border-red-600 p-3'>Our Upcoming Events</p>
      </div>
    </div>
    </>
  )
}

export default Event

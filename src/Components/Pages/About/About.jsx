import './about.css';
import teamPicture from './../../../assets/teamwork.jpg';
import teamPicture2 from './../../../assets/teamwork2.jpg';
import { Helmet, HelmetData } from 'react-helmet-async';


const About = () => {
  const helmetData = new HelmetData({});

  return (
<>
<Helmet helmetData={helmetData}>
        <title>About | EventHorizonX</title>
      </Helmet>
    <div className='h-fit'>
      <div className="bg h-[180px] w-full md:h-[400px] sm:h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <p className='xl:text-5xl md:text-4xl text-2xl font-bold border-b-2 border-red-600 p-2'>About Us</p>
      </div>
      <div className='my-4 px-2 text-justify container mx-auto p-4'>
        <h3 className='p-2 my-6 text-white md:text-2xl text-xl text-center font-bold'>Welcome to EventHorizonX - Redefining Corporate Experiences</h3>
        <p>At EventHorizonX, we hold a fundamental belief: every corporate event is an opportunity for something extraordinary. We don't just plan events; we craft moments that linger in the hearts and minds of attendees long after the lights have dimmed. Our journey begins with your vision, and from there, we embark on a creative odyssey, fueled by an unwavering commitment to innovation, meticulous planning, and unparalleled execution.</p>
        <br />
        <p>Our mission is to transform your concepts and dreams into captivating realities, where every detail is a brushstroke on the canvas of your corporate narrative. We understand that your corporate events are not just gatherings but strategic opportunities, and it's our privilege to help you seize them in the most memorable way possible.</p>
      </div>
      <div className="hero w-full h-fit my-12">
        <div className="hero-content w-full flex-col lg:flex-row-reverse gap-4 items-center justify-center md:my-16">
          <img src={teamPicture} className="md:max-w-lg max-w-sm p-4 rounded-lg shadow-2xl" />
          <div className='sm:p-1 p-4'>
            <h1 className="sm:text-5xl text-4xl font-bold">Who We Are:</h1>
            <p className="sm:py-4 py-3 text-justify">At EventHorizonX, we're more than just an event management company; we are the architects of exceptional experiences. Our team represents a dynamic fusion of talent, a harmonious blend of visionaries, strategists, and artisans, each deeply committed to transforming your corporate event into a masterpiece of creativity, logistics, and technology.</p>
          </div>
        </div>
      </div>
      <img src={teamPicture2} className="xl:max-w-4xl md:max-w-2xl mx-auto max-w-sm p-1 rounded-lg shadow-2xl" />
      <div className='container p-4 mx-auto'>
        <h3 className='text-2xl font-bold text-white my-6'>Weaving Together the Threads:</h3>
        <p className='text-justify'>
          At EventHorizonX, our strength lies in our ability to weave together these diverse talents into a harmonious symphony of creativity, logistics, and technology. Each thread contributes to the fabric of your event, creating a tapestry of moments that captivate, educate, inspire, and entertain.
          <br />
          <br />
          Our commitment is to transcend the ordinary, to transform your corporate event into an experience that not only meets your goals but also surpasses your expectations. We understand that each event is a unique canvas, and we approach it with the reverence and excitement it deserves.
          <br />
          <br />
          Our journey begins with your vision, and from there, we embark on a collaborative odyssey, breathing life into ideas, turning concepts into realities, and creating memories that linger long after the event has concluded. It's not just about planning events; it's about crafting extraordinary moments that define your brand and your message.
          <br />
          <br />
          Join us in the pursuit of excellence, where imagination knows no bounds, strategy maps the path, and artisanal craftsmanship brings it all to life. Experience EventHorizonX, where innovation, passion, and dedication converge to redefine corporate experiences.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;

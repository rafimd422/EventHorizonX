
import Banner from './Banner';
import Service from './Service';
import QuesAndAnswer from './QuesAndAnswer';
import OurFeatures from './OurFeatures';

const Home = () => {


  return (
    <div>
      <Banner />
      <Service />
      <div className="container mx-auto p-4 my-4 space-y-2 text-center">
		<h2  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="md:text-5xl text-4xl mb-4 font-bold text-primary">Built to empower every team</h2>
		<p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-gray-400 text-3xl font-bold border-b-2 border-red-600 p-3 w-fit mx-auto">Our Features</p>
	</div>
      <OurFeatures />
      <QuesAndAnswer />
    </div>
  )
}

export default Home
